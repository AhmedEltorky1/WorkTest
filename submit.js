import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient(
  'https://yjumbkfpnnujdrxlgauj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...<your_key>' // انت حطيت الـ anon key بالفعل
);

document.getElementById('applicationForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const job = document.getElementById('job').value;
  const message = document.getElementById('message').value;
  const file = document.getElementById('cv').files[0];

  if (!file) return alert("ارفع الملف الصوتي!");

  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const filePath = `records/${fileName}`;

  const { error: uploadError } = await supabase.storage.from('records').upload(filePath, file);
  if (uploadError) return alert("فشل رفع الملف");

  const { error } = await supabase.from('applications').insert([
    { name, email, phone, job, message, record_url: filePath }
  ]);

  if (error) {
    alert("فشل إرسال البيانات");
  } else {
    alert("تم التقديم بنجاح ✅");
    document.getElementById('applicationForm').reset();
  }
});
