<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>WorkWise | قدم على وظيفة</title>
  <style>
    body {
      font-family: 'Tahoma', sans-serif;
      background: #f9fafb;
      color: #1e293b;
      margin: 0;
      padding: 0;
    }

    header {
      background: #1e3a8a;
      color: white;
      padding: 20px;
      text-align: center;
    }

    .container {
      padding: 20px;
      max-width: 800px;
      margin: auto;
    }

    .job {
      border: 1px solid #cbd5e1;
      padding: 20px;
      border-radius: 10px;
      margin-bottom: 20px;
      background: white;
    }

    .job h2 {
      color: #1d4ed8;
    }

    .apply-btn {
      background: #1d4ed8;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      margin-top: 10px;
    }

    .form-container {
      display: none;
      border: 2px dashed #1e3a8a;
      padding: 20px;
      margin-top: 20px;
      border-radius: 10px;
      background: #e0f2fe;
    }

    input, textarea, select {
      width: 100%;
      padding: 10px;
      margin-top: 10px;
      margin-bottom: 15px;
      border-radius: 5px;
      border: 1px solid #cbd5e1;
    }

    button[type="submit"] {
      background: #059669;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <header>
    <h1>مرحبا بك في WorkWise</h1>
    <p>اختر العرض المناسب وقدّم الآن</p>
  </header>

  <div class="container">

    <!-- Offer 1 -->
    <div class="job">
      <h2>🇬🇧 English Customer Service – Concentrix</h2>
      <p>الخريجين فقط - مصريين فقط | المرتب: من 14,000 إلى 19,000 جنيه<br>
      نظام شفتات متغيرة (معظمها ليلي) - تأمين طبي واجتماعي - تدريب مدفوع</p>
      <p>يرجى إرسال رسالة صوتية باللغة الإنجليزية لمدة دقيقة تقدم فيها نفسك.</p>
      <button class="apply-btn" onclick="showForm('English Customer Service – Concentrix')">قدّم الآن</button>
    </div>

    <!-- Offer 2 -->
    <div class="job">
      <h2>🇩🇪 German Customer Service – Concentrix</h2>
      <p>الخريجين فقط - مصريين فقط | المرتب: من 26,000 إلى 34,000 جنيه<br>
      بونص ترحيب 5,000 جنيه - تدريب مدفوع - مواصلات حتى باب المنزل</p>
      <p>يرجى إرسال رسالة صوتية دقيقة بالألمانية والإنجليزية تقدم فيها نفسك.</p>
      <button class="apply-btn" onclick="showForm('German Customer Service – Concentrix')">قدّم الآن</button>
    </div>

    <!-- Offer 3 -->
    <div class="job">
      <h2>🟥 English Call Center – HSBC</h2>
      <p>الخريجين فقط - مصريين فقط | المرتب: من 9,000 إلى 15,700 جنيه<br>
      تأمين طبي واجتماعي - تدريب مدفوع - شفتات متغيرة</p>
      <p>يرجى إرسال رسالة صوتية باللغة الإنجليزية.</p>
      <button class="apply-btn" onclick="showForm('English Call Center – HSBC')">قدّم الآن</button>
    </div>

    <!-- Offer 4 -->
    <div class="job">
      <h2>🌐 Acquisition – Volume X (Remote)</h2>
      <p>دوام كامل من المنزل | $4.2/ساعة + عمولة 💲<br>
      مطلوب مستوى إنجليزي قوي + خبرة 6 شهور مبيعات</p>
      <p>أرسل رسالة صوتية باللغة الإنجليزية تقدم فيها نفسك.</p>
      <button class="apply-btn" onclick="showForm('Acquisition – Volume X')">قدّم الآن</button>
    </div>

    <!-- Application Form -->
    <div id="formContainer" class="form-container">
      <h3>فورم التقديم على الوظيفة</h3>
      <form id="applyForm">
        <input type="text" id="name" placeholder="الاسم بالكامل" required />
        <input type="email" id="email" placeholder="البريد الإلكتروني" required />
        <input type="tel" id="phone" placeholder="رقم الهاتف" required />
        <input type="file" id="record" accept="audio/*" required />
        <textarea id="message" placeholder="رسالة أو خبرة سابقة..." required></textarea>
        <input type="hidden" id="job" />
        <button type="submit">إرسال الطلب</button>
      </form>
    </div>
  </div>

  <script type="module">
    import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

    const supabase = createClient(
      'https://yjumbkfpnnujdrxlgauj.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqdW1ia2Zwbm51amRyeGxnYXVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzOTQ4MTksImV4cCI6MjA2OTk3MDgxOX0.YxzZ7ZDeKHpGEuAzxuDqgbSYbFQxle-GhDlJ6PaZDOc'
    );

    function showForm(jobName) {
      document.getElementById('formContainer').style.display = 'block';
      document.getElementById('job').value = jobName;
      window.scrollTo(0, document.body.scrollHeight);
    }

    document.getElementById('applyForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;
      const job = document.getElementById('job').value;
      const file = document.getElementById('record').files[0];

      if (!file) return alert("يرجى رفع الرسالة الصوتية");

      const fileName = `${Date.now()}_${file.name}`;
      const { data, error: uploadError } = await supabase.storage
        .from('records')
        .upload(fileName, file);

      if (uploadError) return alert("فشل في رفع الملف الصوتي");

      const { error } = await supabase.from('applications').insert([
        {
          name, email, phone, message, job, record_url: data.path
        }
      ]);

      if (error) return alert("حدث خطأ في حفظ البيانات");
      alert("تم إرسال طلبك بنجاح ✅");
      document.getElementById('applyForm').reset();
      document.getElementById('formContainer').style.display = 'none';
    });
  </script>
</body>
</html>
