(function(){

    /*------------------------------------------------------------------------

        require.js - 設定

    ------------------------------------------------------------------------*/
    requirejs.config({
        baseUrl: "js/lib",

        // 各JSファイルのパスの設定
        paths: {
            jQuery: "jquery-1.8.3.min",
            modernizr: "modernizr-2.6.2.min",
            myLibrary: "myLibrary"
        },

        // AMD非対応プラグインに対する依存設定
        shim: {
            myLibrary: {
                "deps": ["jQuery"]
            }
        }

    });

    /*------------------------------------------------------------------------

        require.js - 共通モジュールを定義

    ------------------------------------------------------------------------*/
    define(
        "commonModule",
        ["jQuery", "modernizr", "myLibrary"]
    );

    /*------------------------------------------------------------------------

        require.js - 共通モジュールを読み込み、dispatcherで実行するプログラムを振り分け

    ------------------------------------------------------------------------*/
    require(["commonModule"], function(){

        /*----------------------------------------------------------------
            全ページ
        ----------------------------------------------------------------*/
        dispatcher(/\//, function(){
        });

        /*----------------------------------------------------------------
            TOPページ
        ----------------------------------------------------------------*/
        dispatcher(/index\.html$/, function(){
        });


        /*----------------------------------------------------------------
            dispatcherにパスを入れる
        ----------------------------------------------------------------*/
        dispatcher(location.pathname);

    });

})();