# test0503

## ジャンケンゲーム付きラスクアプリの作成手順

以下の手順に従って、ジャンケンゲームができるラスクアプリを作成します。

### 1. プロジェクトのセットアップ
1. 必要なツールをインストールします。
   - Node.js
   - npm または yarn
2. プロジェクトディレクトリに移動します。

### 2. 必要なパッケージのインストール
1. Express をインストールします。
   ```bash
   npm install express
   ```

### 3. アプリケーションの作成
1. `app.js` ファイルを作成し、以下のコードを記述します。
   ```javascript
   const express = require('express');
   const app = express();
   const port = 3000;

   app.get('/', (req, res) => {
       res.send('ようこそ！ジャンケンゲームへ！ /game にアクセスしてください。');
   });

   app.get('/game', (req, res) => {
       res.send(`
           <form action="/result" method="GET">
               <label for="choice">ジャンケンの手を選んでください:</label><br>
               <input type="radio" id="rock" name="choice" value="グー" required>
               <label for="rock">グー</label><br>
               <input type="radio" id="scissors" name="choice" value="チョキ">
               <label for="scissors">チョキ</label><br>
               <input type="radio" id="paper" name="choice" value="パー">
               <label for="paper">パー</label><br><br>
               <button type="submit">勝負する</button>
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

       res.send(`あなた: ${userChoice} <br> コンピュータ: ${computerChoice} <br> 結果: ${result}`);
   });

   app.listen(port, () => {
       console.log(`アプリが http://localhost:${port} で起動しました`);
   });
   ```

### 4. アプリケーションの起動
1. ターミナルで以下のコマンドを実行します。
   ```bash
   node app.js
   ```
2. ブラウザで `http://localhost:3000` にアクセスし、案内に従って `/game` に移動します。

### 5. 動作確認
1. `/game` にアクセスすると、ジャンケンゲームが動作することを確認します。

### 6. デプロイ (オプション)
1. Heroku や Vercel などのプラットフォームを使用してアプリをデプロイします。

### 7. ユーザーが選択できるジャンケンゲームへの変更

以下の手順で、ユーザーが「グー」「チョキ」「パー」を選択できるようにアプリを変更します。

1. `app.js` を編集して、以下のコードを追加します。
   ```javascript
   app.get('/game', (req, res) => {
       res.send(`
           <form action="/result" method="GET">
               <label for="choice">ジャンケンの手を選んでください:</label><br>
               <input type="radio" id="rock" name="choice" value="グー" required>
               <label for="rock">グー</label><br>
               <input type="radio" id="scissors" name="choice" value="チョキ">
               <label for="scissors">チョキ</label><br>
               <input type="radio" id="paper" name="choice" value="パー">
               <label for="paper">パー</label><br><br>
               <button type="submit">勝負する</button>
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

       res.send(`あなた: ${userChoice} <br> コンピュータ: ${computerChoice} <br> 結果: ${result}`);
   });
   ```

2. アプリを再起動します。
   ```bash
   node app.js
   ```

3. ブラウザで `/game` にアクセスし、ジャンケンの手を選択して勝負できることを確認します。

以上で、ジャンケンゲーム付きラスクアプリの作成が完了です！