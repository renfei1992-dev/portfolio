// Quick check to see if environment variables are loaded
console.log('=== Environment Variable Check ===');
console.log('VITE_OPENAI_API_KEY exists:', !!import.meta.env.VITE_OPENAI_API_KEY);
console.log('First 10 chars:', import.meta.env.VITE_OPENAI_API_KEY?.substring(0, 10) || 'NOT FOUND');
console.log('================================');
