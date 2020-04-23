const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    volume: 0.2,
    audio: [
      {
        name: '夏天的风（原唱：温岚）',
        artist: '火羊瞌睡了',
        url: 'http://music.163.com/song/media/outer/url?id=1436709403.mp3',
        cover: '',
      },
      {
        name: '夏日延长战 feat.熊子',
        artist: '熊子',
        url: 'http://music.163.com/song/media/outer/url?id=1313759542.mp3',
        cover: '',
      },
      {
        name: 'Sing',
        artist: 'Frida Amundsen',
        url: 'http://music.163.com/song/media/outer/url?id=19830033.mp3',
        cover: '',
       },
       {
        name: 'アイロニ',
        artist: 'majiko',
        url: 'http://music.163.com/song/media/outer/url?id=31421442.mp3',
        cover: '',
      }
    ]
});

