const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('ようこそ！ジャンケンゲームへ！ /game にアクセスしてください。');
});

app.get('/game', (req, res) => {
    res.send(`
        <h1>ジャンケンゲーム</h1>
        <p>以下のボタンからジャンケンの手を選んでください。</p>
        <form action="/result" method="GET">
            <button type="submit" name="choice" value="グー">グー</button>
            <button type="submit" name="choice" value="チョキ">チョキ</button>
            <button type="submit" name="choice" value="パー">パー</button>
        </form>
    `);
});

app.get('/result', (req, res) => {
    const userChoice = req.query.choice;
    const choices = ['グー', 'チョキ', 'パー'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = '';
    if (userChoice === computerChoice) {
        result = '引き分け';
    } else if (
        (userChoice === 'グー' && computerChoice === 'チョキ') ||
        (userChoice === 'チョキ' && computerChoice === 'パー') ||
        (userChoice === 'パー' && computerChoice === 'グー')
    ) {
        result = 'あなたの勝ち！';
    } else {
        result = 'コンピュータの勝ち！';
    }

    res.send(`
        <h1>結果発表</h1>
        <p>あなた: ${userChoice}</p>
        <p>コンピュータ: ${computerChoice}</p>
        <p>結果: ${result}</p>
        <a href="/game">もう一度プレイする</a>
    `);
});

app.listen(port, () => {
    console.log(`アプリが http://localhost:${port} で起動しました`);
});