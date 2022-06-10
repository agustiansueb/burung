var game = {
    data: {
        score : 0,
        steps: 0,
        start: false,
        newHiScore: false,
        muted: false
    },

    resources: [
            // images
        {name: "bg", type:"image", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1P3JcaB84fVGRbNaObpfQMD2NBOh68d7ucar-NvuDCa5beANsp6RNG8uMVkH62heBiRINxXmLa3waVofnipNt6QVfkrul8OObojnCmlHRShLNCiKggQaG_i3q3MeWSoGETrY5NxF8EMP6olpgFM-B3J9EopL6cbAsmGXp9U_Xql41jAMy08tFTbI/s900/bg.png"},
		//data/img/bg.png"},
        {name: "clumsy", type:"image", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjco6XbiPlRyLxYcwenvXSi6h_LCRmZRfzB6VRYdyV78vMMmFkRQsdHu3r2wAHLzRkNr7cgTfSaqv9z6QAtEU5DzTrYu5JNy_SW_xjxekfxtlS8m3xHunHdDbNFhYkaxHFg-dvRV4IA6G5wyoW4c20DbG6Viu428jqgspqRVJ-PlnwgSgz0zDcuw74/s255/clumsy.png"},
		//data/img/clumsy.png"},
        {name: "pipe", type:"image", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVDu80WF6wx9mQJfM5nbyQ_t67lzdt0EGgLGPAxQ6LN4PCszp5AjBMsovrgfw7Zc-Y-1DaLZ3dRVPFZqYcyZfyurzkuigYYl0Uhkb6yoBNgF6GksCQl08gfowKT7INEj_XTI-5Hee4cVLFMVTkCoGFPmv2CcYwRQVeWODT1bGt0pI3PqeLBFMM6ko/s1664/pipe.png"},
		//data/img/pipe.png"},
        {name: "logo", type:"image", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqjcFAwbDwa6Dk1mh2jBSYh_1LcN-d7CeYL8cHzizhXC_KwPrlLnkG9UMqK9F4x8CREnU1YGclj5uTwZ_OL4DuTZgR0igo9JbOMapy_0x3rgmdy0i8zx9lskem8Ltz4HR1g5MeNu58wype7w7jsZUtFbZZUht8j0j3VnM64wPdbksPLsaRpKKhb8Y/s351/logo.png"},
		//data/img/logo.png"},
        {name: "ground", type:"image", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixbks8WH_SVxrAc6zwH2CAY2zmviaAkLsgYzt3_rrcJ0atFprC0__WSvR5vgF8BCspNaDTlWLHXfDGg-HPeqnP2HOyzQnZLxU1K-14PSxlp63cw8YEyBRLFQ4nv6VllvMQFyDPmC9dE3Dkv2of_8xT0JspppZxie_x87XEg3SJBFXx-MZcyGoBYh8/s900/ground.png"},
		//data/img/ground.png"},
        {name: "gameover", type:"image", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4wdBOJZ3hiF4iRbiu75B4mcVG4UtalI25Vd1631bRKdO35LcaChYKV2jz4bNuQnwmWHC8pKbld_jaWnuIhcTjASGN6YV0TXTP1Qh4RMPCQEbuMsqasUVrfh-Qja9N-3dhwpp6hTJuI_wkHlQltGIeQ_W4FEYh6bgbhAO408RXFDWBIkIkHHlvVx4/s245/gameover.png"},
		//data/img/gameover.png"},
        {name: "gameoverbg", type:"image", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEix2vZyTpmgJKivbWm4E3dN-NQeg843SdyLAZrV4ZHnJ0GhFOKZNmy0WLvVASf6_SwmKum1GYstYwdxF8hwY-nWjhzmc2u5-dKkpPGxUIr5cIKg9J12TOHiZDhXlRGrPlj5evfXD-CpRifSCG_wFhIDIlHqq0ZXQ6ax04a5ccmvkb5CD4j5x-00jZk/s505/gameoverbg.png"},
		//data/img/gameoverbg.png"},
        {name: "hit", type:"image", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmsmY6XiNyQqjk7kOI0CpU_TMNHRehdUcaRzwFwEUm56Urg7oE3fROipVC-ZiLdjSd-yiI2-UXzuavsA39sYgfPMggYUuli6aC2SnbeJMWcKOjcBV4yKMwA7gRrMKlaPDXyfnIqZpVVlc8k8Y2YXq6X1DR0dT4HErGGnHqwx4G55OBj1aOzA3TvcM/s148/hit.png"},
		//data/img/hit.png"},
        {name: "getready", type:"image", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdHZL3yq9FTAHePfA9Bl9txpk__uNJw8YGmnluXXxggy4oT7iZri0Ipm-LEFrgCusaia3iazi0BOHlLMnakHE6LwmuxMVZYa0b-UmLq1rFQtRjF51La7x_flR8gv9JdNouKtZZw978u9pZq8NbpNU9vgtyWE_p3NmvGQAugabiXk_G0Wou0ogzq8k/s405/getready.png"},
		//data/img/getready.png"},
        {name: "new", type:"image", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXXun2qzYpTmYYptHxWpTGhCPLfykqJWqaXFSGN6AxPm65RpZvy-chuQa7WHt36f150Xa6II4_hVXmxSQhkQHhrK6c9OU-063J8MDA9L5T5jz-YK4YnbtrgUCyP2mnlCGamsqs3AAQFk4AADjTdfhoslS9sWQyhi8GjkS9G1dDXH-9B2ypR_yoSd8/s48/new.png"},
		//data/img/new.png"},
        {name: "share", type:"image", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh87mybWFnfV05umSqr-IUjFvwA2J7JBIaU7SdsOgFC-5kUWDc4nowZZIb0oyjzouiLBOeVH07b4VNSmUrNPstW5ETWlV98Iw4AqV1JokyrWrSp4Hn_lKNx4bvdpSJ3mBiDLUsgPSpQm4jcgUI-12R02KuHqx5bjpv9CA07FjN009DwQVJGHLGT79s/s150/share.png"},
		//data/img/share.png"},
        {name: "tweet", type:"image", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUs1q3Cbv0fCL1PM5GvyMTNbGRUOxGIaPqIeQhLzkoGg5QhnwL-duSh2TI3KDNzf55chmiiRLb3OF6tZJcuS8X47qEXOXOa21WA53sHowYWT0zgxE0EgOXqbN3KQ28nitomoX6Ig8Mee7ufmIBQv1bBwxQQ6KXRxScxpyrd2wZ_PHn1-yOQ4Q504E/s152/tweet.png"},
		//data/img/tweet.png"},
        // sounds
        {name: "theme", type: "audio", src: "https://rawcdn.githack.com/agustiansueb/burung/tree/master/data"},
		//data/bgm/"},
        {name: "hit", type: "audio", src: "https://rawcdn.githack.com/agustiansueb/burung/tree/master/data/sfx"},
		//data/sfx/"},
        {name: "lose", type: "audio", src: "https://rawcdn.githack.com/agustiansueb/burung/tree/master/data/sfx"},
        {name: "wing", type: "audio", src: "https://rawcdn.githack.com/agustiansueb/burung/tree/master/data/sfx"},

    ],

    "onload": function() {
        if (!me.video.init(900, 600, {
            wrapper: "screen",
            scale : "auto",
            scaleMethod: "fit"
        })) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }
        me.audio.init("mp3,ogg");
        me.loader.preload(game.resources, this.loaded.bind(this));
    },

    "loaded": function() {
        me.state.set(me.state.MENU, new game.TitleScreen());
        me.state.set(me.state.PLAY, new game.PlayScreen());
        me.state.set(me.state.GAME_OVER, new game.GameOverScreen());

        me.input.bindKey(me.input.KEY.SPACE, "fly", true);
        me.input.bindKey(me.input.KEY.M, "mute", true);
        me.input.bindPointer(me.input.KEY.SPACE);

        me.pool.register("clumsy", game.BirdEntity);
        me.pool.register("pipe", game.PipeEntity, true);
        me.pool.register("hit", game.HitEntity, true);
        me.pool.register("ground", game.Ground, true);

        me.state.change(me.state.MENU);
    }
};
