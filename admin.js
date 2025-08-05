import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient(
  'https://yjumbkfpnnujdrxlgauj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...<your_key>'
);

window.checkPassword = function () {
  const pass = document.getElementById('adminPass').value;
  if (pass === "workwise12345") {
    document.getElementById('dashboard').style.display = 'block';
    loadApplications();
  } else {
    alert("كلمة مرور خاطئة!");
  }
};

async function loadApplications() {
  const { data, error } = await supabase.from('applications').select('*');
  const container = document.getElementById('applications');
  container.innerHTML = '';

  data.forEach(app => {
    const item = document.createElement('div');
    item.innerHTML = `
      <hr>
      <strong>الاسم:</strong> ${app.name}<br>
      <strong>الإيميل:</strong> ${app.email}<br>
      <strong>رقم الهاتف:</strong> ${app.phone}<br>
      <strong>الوظيفة:</strong> ${app.job}<br>
      <strong>الرسالة:</strong> ${app.message}<br>
      <audio controls src="https://yjumbkfpnnujdrxlgauj.supabase.co/storage/v1/object/public/${app.record_url}"></audio><br>
      <button onclick="deleteApplication(${app.id})">🗑️ مسح</button>
    `;
    container.appendChild(item);
  });
}

window.deleteApplication = async function (id) {
  await supabase.from('applications').delete().eq('id', id);
  loadApplications();
}
