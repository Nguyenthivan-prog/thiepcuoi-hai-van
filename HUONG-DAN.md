# 💍 Hướng dẫn hoàn thiện thiệp cưới online

Có 2 thiệp riêng, mỗi thiệp là 1 thư mục tự chứa (index.html + images/ + nhac.mp3):
- `nha-gai/` — Lễ Vu Quy 26/09 → https://v.haivan.website (S3 bucket `hai-van`)
- `nha-trai/` — Lễ Thành Hôn 29/09 → https://h.haivan.website (S3 bucket `hai-van-nhatrai`)

Trong mỗi thư mục:
- `index.html` — trang thiệp (mở bằng trình duyệt để xem)
- `images/` — chứa ảnh (anh-01 → anh-11) và sẽ chứa QR chuyển khoản

Form lời chúc đã gắn Google Sheet (WISH_URL trong `<script>` cuối file) — cả 2 thiệp ghi chung 1 Sheet.

---

## ✅ Các bước hoàn thiện

### Bước 1 — Điền nội dung thật
Mở `index.html`, tìm và thay các chỗ trong dấu `[ ... ]`. Hoặc gửi thông tin cho mình theo mẫu ở cuối file này, mình điền giúp.

Những chỗ cần thay:
- Tên cô dâu & chú rể (hiện là "Anh Tuấn & Ngọc Anh") — ở nhiều nơi
- Ngày cưới — sửa ở dòng `const WEDDING_DATE = ...` (gần cuối, trong `<script>`) **và** các chỗ hiển thị ngày
- Tên bố mẹ 2 bên (mục Gia đình)
- Tên nhà hàng + địa chỉ + link Google Maps
- Timeline giờ giấc chương trình
- Số tài khoản mừng cưới

### Bước 2 — Bật RSVP (nhận xác nhận của khách)
1. Vào https://formspree.io → đăng ký miễn phí (dùng email của bạn)
2. Tạo 1 form mới → copy đoạn mã dạng `https://formspree.io/f/xxxxxxx`
3. Trong `index.html`, tìm `YOUR_FORM_ID` và thay bằng mã đó
4. Khách điền form → phản hồi gửi thẳng về email/dashboard của bạn

### Bước 3 — Thêm nhạc nền (tuỳ chọn)
- Chép 1 file nhạc, đặt tên `nhac.mp3`, bỏ vào thư mục `website/`
- Xong! Khách bấm nút ♪ góc trên phải để nghe.

### Bước 4 — Thêm QR chuyển khoản (tuỳ chọn)
- Tải ảnh QR ngân hàng (VietQR / app ngân hàng), đặt tên `qr-chure.png` và `qr-codau.png`
- Bỏ vào thư mục `images/`
- Trong `index.html`, tìm 2 khối `<div class="qr">...</div>` và thay bằng:
  `<img class="qr" src="images/qr-chure.png" alt="QR">`

### Bước 5 — Đăng lên mạng (Netlify — miễn phí)
1. Vào https://app.netlify.com/drop
2. **Kéo cả thư mục `website`** thả vào ô trên trang
3. Đợi vài giây → có ngay link dạng `ten-ngau-nhien.netlify.app`
4. Vào *Site settings → Change site name* để đổi thành tên đẹp, ví dụ `anhtuan-ngocanh.netlify.app`
5. Copy link đó gửi bạn bè qua Zalo/Facebook 🎉

> Mỗi lần sửa nội dung, chỉ cần kéo-thả lại thư mục là web tự cập nhật.

---

## 📝 Mẫu thông tin để gửi (điền rồi đưa mình điền giúp)

```
- Tên chú rể:
- Tên cô dâu:
- Ngày & giờ cưới:
- Bố mẹ nhà trai (ông / bà):
- Bố mẹ nhà gái (ông / bà):
- Tên nhà hàng / trung tâm tiệc:
- Địa chỉ đầy đủ:
- Link Google Maps:
- Timeline (giờ - nội dung):
- Câu quote/lời mở đầu muốn dùng:
- Mừng cưới chú rể (ngân hàng / STK / tên):
- Mừng cưới cô dâu (ngân hàng / STK / tên):
- Facebook / Zalo / Instagram:
```
