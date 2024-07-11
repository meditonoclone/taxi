document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById('login-modal');
  var loginLink = document.querySelector('.account-dropdown a[href="#"]');
  var span = document.getElementsByClassName("close")[0];

  loginLink.onclick = function(e) {
      e.preventDefault();
      modal.style.display = "block";
  }

  span.onclick = function() {
      modal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  document.getElementById('login-form').onsubmit = function(e) {
      e.preventDefault();
      // Xử lý đăng nhập ở đây
      console.log('Đăng nhập với:', {
          username: document.getElementById('username').value,
          password: document.getElementById('password').value
      });
      // Sau khi xử lý, có thể đóng modal
      modal.style.display = "none";
  }
});

document.addEventListener('DOMContentLoaded', function() {
    const loginLink = document.getElementById('login-link');
    const registerLink = document.getElementById('register-link');
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const forgotPasswordModal = document.getElementById('forgot-password-modal');
    const successModal = document.getElementById('success-modal');
    const closeButtons = document.querySelectorAll('.close');
    const closeSuccessButton = document.getElementById('close-success');

    // Hàm mở modal
    function openModal(modal) {
        modal.style.display = 'block';
    }

    // Hàm đóng modal
    function closeModal(modal) {
        modal.style.display = 'none';
    }

    // Xử lý sự kiện click cho các link
    loginLink.addEventListener('click', () => openModal(loginModal));
    registerLink.addEventListener('click', () => openModal(registerModal));
    forgotPasswordLink.addEventListener('click', () => openModal(forgotPasswordModal));

    // Đóng modal khi click vào nút đóng
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            closeModal(this.closest('.modal'));
        });
    });

    // Đóng modal success
    closeSuccessButton.addEventListener('click', () => closeModal(successModal));

    // Xử lý form đăng nhập
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        // Xử lý logic đăng nhập ở đây
        showSuccessModal('Đăng nhập thành công', 'Chào mừng bạn đã quay trở lại.');
        closeModal(loginModal);
    });

    // Xử lý form đăng ký
    document.getElementById('register-form').addEventListener('submit', function(e) {
        e.preventDefault();
        // Xử lý logic đăng ký ở đây
        showSuccessModal('Đăng ký thành công', 'Tài khoản của bạn đã được tạo.');
        closeModal(registerModal);
    });

    // Xử lý form quên mật khẩu
    document.getElementById('forgot-password-form').addEventListener('submit', function(e) {
        e.preventDefault();
        // Xử lý logic quên mật khẩu ở đây
        showSuccessModal('Yêu cầu đã được gửi', 'Vui lòng kiểm tra email của bạn để đặt lại mật khẩu.');
        closeModal(forgotPasswordModal);
    });

    // Hàm hiển thị modal thành công
    function showSuccessModal(title, message) {
        document.getElementById('success-title').textContent = title;
        document.getElementById('success-message').textContent = message;
        openModal(successModal);
    }

    
});