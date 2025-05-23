
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const StorageBucketCheck = () => {
  useEffect(() => {
    const checkBucket = async () => {
      try {
        // Check if stock_images bucket exists
        const { data: buckets } = await supabase.storage.listBuckets();
        const stockBucketExists = buckets?.some(bucket => bucket.name === 'stock_images');
        
        // Create bucket if it doesn't exist
        if (!stockBucketExists) {
          await supabase.storage.createBucket('stock_images', {
            public: true,
            fileSizeLimit: 5242880, // 5MB
          });
          
          // Set bucket public
          await supabase.storage.updateBucket('stock_images', {
            public: true,
          });
        }
      } catch (error) {
        console.error("Error checking/creating storage bucket:", error);
      }
    };
    
    checkBucket();
  }, []);
  
  return null; // This component doesn't render anything
};

export default StorageBucketCheck;
