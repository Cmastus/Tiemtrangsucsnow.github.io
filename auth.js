// Xử lý đăng nhập Google OAuth
document.getElementById('googleLogin')?.addEventListener('click', function() {
    initiateGoogleOAuth();
});

function initiateGoogleOAuth() {
    const clientId = 'YOUR_GOOGLE_CLIENT_ID';
    const redirectUri = 'http://localhost:3000/dashboard.html';
    const scope = 'email profile';
    
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
        `client_id=${clientId}` +
        `&redirect_uri=${encodeURIComponent(redirectUri)}` +
        `&response_type=code` +
        `&scope=${encodeURIComponent(scope)}` +
        `&access_type=offline` +
        `&prompt=consent`;
    
    window.location.href = authUrl;
}

// Kiểm tra trạng thái đăng nhập
document.addEventListener('DOMContentLoaded', function() {
    const token = localStorage.getItem('authToken');
    if (token) {
        window.location.href = '/';
    }
});