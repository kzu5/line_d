async function fetchRoomStatus() {
  // ⚠️ YOUR_PLEASANTER_URLとAPIキーを置き換えてください
  const pleasanterUrl = 'YOUR_PLEASANTER_URL';
  const pleasanterApiKey = 'YOUR_PLEASANTER_API_KEY';

  // PleasanterのAPIを呼び出して在室人数を取得する
  const response = await fetch(`${pleasanterUrl}/api/v1/your_dashboard_view_id`, {
    headers: {
      'Authorization': `Bearer ${pleasanterApiKey}`
    }
  });

  const data = await response.json();
  
  // 取得したデータをHTMLに反映する
  const roomACount = data.records.find(r => r.room_id === 'A').count;
  document.getElementById('roomA-seats').textContent = `${roomACount} 席`;
  // 他の学習室も同様に処理
}

fetchRoomStatus();
setInterval(fetchRoomStatus, 60000); // 60秒ごとに更新