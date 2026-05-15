document.getElementById("searchBtn").addEventListener("click", () => {
    const username = document.getElementById("username").value.trim()
    const resultDiv = document.getElementById("result")
    if (!username) {
        resultDiv.innerHTML = "<p>ユーザー名を入力してください。</p>"
        return;
    }

    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("ユーザーが見つかりませんでした");
            }
            return response.json();
        })
        .then(data => {
            resultDiv.innerHTML = `
                <p><strong>ユーザー名:</strong> ${data.login}</p>
                <p><strong>名前:</strong> ${data.name || "未設定"}</p>
                <p><strong>フォロワー数:</strong> ${data.followers}</p>
                <p><strong>公開リポジトリ数:</strong> ${data.public_repos}</p>
                <img src="${data.avatar_url}" alt="Avatar" width="100" alt="アイコン画像">
            `;
        })
        .catch(error => {
            resultDiv.innerHTML = `<p>${error.message}</p>`;
        });
});