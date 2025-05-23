
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/context/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Upload, CheckCircle2 } from "lucide-react";

type StockFormValues = {
  stockName: string;
  price: string;
  height: string;
  length: string;
  totalSqFeet: string;
  additionalDetails: string;
};

const PartnerStockForm = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<StockFormValues>({
    defaultValues: {
      stockName: "",
      price: "",
      height: "",
      length: "",
      totalSqFeet: "",
      additionalDetails: "",
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: StockFormValues) => {
    if (!user) return;
    
    setIsSubmitting(true);
    
    try {
      // Upload image if selected
      let imageUrl = null;
      if (imageFile) {
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `${user.id}/${fileName}`;
        
        const { error: uploadError } = await supabase.storage
          .from('stock_images')
          .upload(filePath, imageFile);
          
        if (uploadError) throw uploadError;
        
        const { data: urlData } = supabase.storage
          .from('stock_images')
          .getPublicUrl(filePath);
          
        imageUrl = urlData.publicUrl;
      }
      
      // Save the stock details
      const { error } = await supabase.from('seller_stocks').insert({
        company_name: "Partner Company", // This could come from user profile or form
        contact_person: user.user_metadata?.full_name || "Partner",
        whatsapp_number: "", // This could come from user profile or form
        email: user.email || "",
        business_type: "Partner",
        product_category: data.stockName,
        stock_details: JSON.stringify({
          price: data.price,
          height: data.height,
          length: data.length,
          totalSqFeet: data.totalSqFeet,
          imageUrl: imageUrl,
        }),
        message: data.additionalDetails,
        user_id: user.id,
        status: 'pending'
      });
      
      if (error) throw error;
      
      setIsSuccess(true);
      form.reset();
      setImageFile(null);
      setImagePreview(null);
      
      toast({
        title: "Stock details submitted successfully",
        description: "We'll review your submission and get back to you soon.",
      });
    } catch (error: any) {
      console.error("Error submitting stock details:", error);
      toast({
        title: "Submission failed",
        description: error.message || "An error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const resetForm = () => {
    setIsSuccess(false);
    form.reset();
    setImageFile(null);
    setImagePreview(null);
  };

  if (!user) return null;

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="bg-primary/5 border-b">
        <CardTitle>Send Stock Details</CardTitle>
        <CardDescription>
          Share information about your available stock materials
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-6">
        {isSuccess ? (
          <div className="py-10 text-center">
            <div className="bg-green-50 text-green-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Stock Details Submitted!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for sharing your stock details. Our team will review the information and get in touch with you soon.
            </p>
            <Button onClick={resetForm}>Submit Another Stock</Button>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="stockName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stock Name *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter product or stone name" 
                        {...field} 
                        required 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Price per sq ft or total price" 
                        {...field} 
                        required 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="height"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Height (H) *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Height in inches/cm" 
                          {...field} 
                          required 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="length"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Length (L) *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Length in inches/cm" 
                          {...field} 
                          required 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="totalSqFeet"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total Sq. Feet *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Total square feet of stock" 
                        {...field} 
                        required 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="space-y-2">
                <FormLabel htmlFor="image">Image Upload *</FormLabel>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center">
                  <input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  {imagePreview ? (
                    <div className="relative w-full">
                      <img 
                        src={imagePreview} 
                        alt="Stock preview" 
                        className="max-h-48 mx-auto rounded-md object-contain" 
                      />
                      <button 
                        type="button" 
                        onClick={() => {
                          setImageFile(null);
                          setImagePreview(null);
                        }}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <label 
                      htmlFor="image" 
                      className="cursor-pointer flex flex-col items-center space-y-2"
                    >
                      <Upload className="h-10 w-10 text-gray-400" />
                      <span className="text-gray-600">Click to upload an image</span>
                      <span className="text-xs text-gray-400">PNG, JPG, GIF up to 5MB</span>
                    </label>
                  )}
                </div>
              </div>
              
              <FormField
                control={form.control}
                name="additionalDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Details</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Any other details about your stock" 
                        {...field} 
                        className="min-h-[100px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting || !imageFile}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Send Details"
                )}
              </Button>
            </form>
          </Form>
        )}
      </CardContent>
    </Card>
  );
};

export default PartnerStockForm;
