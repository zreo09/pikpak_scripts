document.addEventListener('DOMContentLoaded', function() {
    fetch('users.json')
        .then(response => response.json())
        .then(data => {
            if (data.length > 3) {
                data = data.slice(data.length - 3);
            }
            displayUsers(data);
        })
        .catch(error => console.error('Error fetching users:', error));
});

function displayUsers(users) {
    const usersContainer = document.getElementById('users-container');
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');

        const email = user['用户名'];
        const password = user['密码'];

        userDiv.innerHTML = `
            <div class="user-title">${email}</div>
            <div class="user-info">
                <div><button class="copy-btn" onclick="copyToClipboard('${email}')">复制账号</button>
                <button class="copy-btn" onclick="copyToClipboard('${password}')">复制密码</button></div>
            </div>`;
        
        usersContainer.appendChild(userDiv);
    });
}

function copyToClipboard(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showCopySuccess();
}

function showCopySuccess() {
    const copySuccess = document.getElementById('copy-success');
    copySuccess.textContent = '复制成功';
    copySuccess.classList.add('active');
    setTimeout(() => {
        copySuccess.classList.remove('active');
    }, 1000);
}
