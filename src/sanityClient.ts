import { createClient } from '@sanity/client';

export default createClient({
  projectId: 'ed8h2w31', 
  dataset: 'production', 
  useCdn: true, 
  apiVersion: '2025-10-27', 
});