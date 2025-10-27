import { createClient } from '@sanity/client';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;

if (!projectId) {
  console.error("VITE_SANITY_PROJECT_ID não está definido! Verifique suas variáveis de ambiente.");
}

export default createClient({
  projectId: 'ed8h2w31', 
  dataset: 'production', 
  useCdn: true, 
  apiVersion: '2025-10-27', 
});