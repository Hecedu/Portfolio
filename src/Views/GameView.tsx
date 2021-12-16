import React, { useEffect } from 'react'
import Unity, { UnityContext } from 'react-unity-webgl';

export default function GameView() {
    const unityContext = new UnityContext({
        loaderUrl: "Build/cheatsquad.loader.js",
        dataUrl: "Build/cheatsquad.data",
        frameworkUrl: "Build/cheatsquad.framework.js",
        codeUrl: "Build/cheatsquad.wasm",
    });

    useEffect(function () {
        unityContext.on("canvas", function (canvas) {
            canvas.width = 1024;
            canvas.height = 576;
        });
    }, [unityContext]);


    return (
        <div className='container d-flex justify-content-center my-4'>
            <div className='text-center'>

                <Unity unityContext={unityContext} matchWebGLToCanvasSize={true} style={{ width: "1024px", height: "576px" }} />
                <h1>Cheat Squad</h1>
                <p className='my-0'>Sole developer: Programming, Graphics, Game Design, Sound Design. Music by Sawsquarenoise.</p>
                <p className='fst-italic my-0'> Technologies: Unity2D, C#</p>
                <p>Instructions: Player 1 moves using WASD, jumps with F shoots with J. Player 2 moves using IJKL, jumps with ; shoots with '</p>
            </div>
        </div>
    )
}
