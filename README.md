<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <title>WorkWise - التقديم</title>
</head>
<body>
  <h1>📋 التقديم على وظيفة</h1>
  <form id="applicationForm">
    <input type="text" id="name" placeholder="الاسم" required><br>
    <input type="email" id="email" placeholder="البريد الإلكتروني" required><br>
    <input type="tel" id="phone" placeholder="رقم الهاتف" required><br>

    <label for="job">اختر الوظيفة:</label>
    <select id="job" required>
      <option value="">-- اختر الوظيفة --</option>
      <option value="🇬🇧 English Customer Service - Concentrix">🇬🇧 English Customer Service - Concentrix</option>
      <option value="🇩🇪 German Customer Service - Concentrix">🇩🇪 German Customer Service - Concentrix</option>
      <option value="🟥 English Call Center - HSBC">🟥 English Call Center - HSBC</option>
      <option value="🌐 Acquisition - Volume X">🌐 Acquisition - Volume X</option>
    </select><br>

    <label>ملف صوتي:</label>
    <input type="file" id="cv" accept="audio/*" required><br>

    <textarea id="message" placeholder="رسالة / خبرة..." required></textarea><br>

    <button type="submit">إرسال</button>
  </form>

  <script type="module" src="./submit.js"></script>
</body>
</html>
