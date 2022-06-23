<script lang="ts">
  export let src: string;
  let canvas: HTMLCanvasElement;
  let audio: HTMLAudioElement | undefined;
  let first = true;
  let render = false;
  const played = () => {
    render = true;
    document.querySelectorAll('audio').forEach((item) => {
      if (item !== audio) item.pause();
    });
    if (!first) return;
    first = false;
    let context = new AudioContext();
    const src = context.createMediaElementSource(audio);
    let analyser = context.createAnalyser();
    src.connect(analyser);
    analyser.connect(context.destination);
    analyser.fftSize = 128;
    let bufferLength = analyser.frequencyBinCount - 10;
    let dataArrays = [
      new Uint8Array(bufferLength),
      new Uint8Array(bufferLength),
    ];
    let index = 0;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    const gap = 0.2;
    const width = canvas.width / bufferLength;
    const fill = width * gap;
    const pad = (width * gap) / 2;
    const grd = ctx.createLinearGradient(0, 0, canvas.width, 0);
    grd.addColorStop(0, '#00afff');
    grd.addColorStop(1, '#0fffff');
    const renderFrame = () => {
      if (canvas) {
        requestAnimationFrame(renderFrame);
      } else {
        location.reload();
      }
      const thisArr = dataArrays[index];
      const otherArr = dataArrays[(index + 1) % 2];
      analyser.getByteFrequencyData(thisArr);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < bufferLength; i++) {
        const value = thisArr[i];
        const lastValue = otherArr[i];
        ctx.fillStyle = grd;
        ctx.fillRect(
          i * width + pad,
          canvas.height,
          width - fill,
          -((value / 256) ** 3) * canvas.height
        );
      }
      index = (index + 1) % 2;
    };
    renderFrame();
  };
  const height = 15;
  let renderDelayed = false;
  $: setTimeout(() => {
    renderDelayed = render;
  }, 200);
</script>

<div>
  <audio
    controls
    style="justify-self: flex-end; width: 100%;"
    bind:this={audio}
    on:play={played}
    on:pause={() => {
      render = false;
    }}
  >
    <source {src} type="audio/mp3" />
  </audio>

  <div
    class="wrapper"
    style="height: {render ? height : 0}px; overflow: {render && renderDelayed
      ? 'visible'
      : 'hidden'};"
  >
    <canvas bind:this={canvas} width={window.innerWidth} {height} />
  </div>
</div>

<style>
  audio {
    display: block;
    max-height: 3rem;
  }
  canvas {
    width: 100%;
    pointer-events: none;
    touch-action: none;
    transform: translateY(-50%);
    filter: drop-shadow(0px 0px 10px var(--blue-accent));
  }
  .wrapper {
    transition: 0.2s;
    overflow: visible;
    transition-delay: 0.2s;
  }
</style>
