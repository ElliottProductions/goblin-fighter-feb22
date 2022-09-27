const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6YmFwaWd1YmJzd2tobXBrbW91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc4Nzk0NTMsImV4cCI6MTk2MzQ1NTQ1M30.4fqkZViMQGidqxI8xltReNok9umY5rBiZ0lrBWSVBks';
const SUPABASE_URL = 'https://gzbapigubbswkhmpkmou.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getGoblins(){
    const response = await client
        .from('goblins')
        .select('*')
        .order('id', { ascending: true });
        
    return response.body;
}

export async function updateGoblins(booger){
    await client
        .from('goblins')
        .update({ hp: booger.hp })
        .match({ id: booger.id });
}

export async function signInUser(email, password){
    
    
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return window.location.href = '../';
}
