new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data: () => ({
    items: [
      { header: 'Pabloメンバーの自己紹介のページです．' },
      {
        avatar: 'https://1.bp.blogspot.com/-ArjRdInEWeA/X6tmhYIIYTI/AAAAAAABcMU/w7I_OpFBIzo1Yaz168UKnoB1eSccec2UACNcBGAsYHQ/s400/souji_zoukin_boy.png',
        title: '<a href="https://kobe-pablo.github.io" target="_blank" style="color: black;">Pablo太郎と申します．</a>',
        subtitle: 'よろしくね．',
      },
      { divider: true, inset: true },
    ],
  }),
}
)