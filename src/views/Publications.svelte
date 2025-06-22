<script lang="ts">
  import { exioZoomInAnimation } from 'exio/svelte';
  import Cards from '../components/Cards.svelte';
  import Card from '../components/Card.svelte';
  import { exioButton } from 'exio/svelte';
  import { _ } from 'svelte-i18n';
  import '../css/page.css';
</script>

<div use:exioZoomInAnimation style="transform-origin: top center;">
  <Cards>
    <Card titleCard>
      <svelte:fragment slot="title">
        {$_('entries.research.title')}
      </svelte:fragment>
      <!-- <svelte:fragment slot="content">
        <div class="buttons center">
          <a
            href="https://scholar.google.com/citations?user=iQoZSr4AAAAJ"
            target="_blank"
          >
            <button use:exioButton class="popup">Google Scholar</button>
          </a>
          <a
            href="https://www.semanticscholar.org/author/Kento-Nishi/1721045940"
            target="_blank"
          >
            <button use:exioButton class="popup">Semantic Scholar</button>
          </a>
        </div>
      </svelte:fragment> -->
    </Card>
    <Card>
      <svelte:fragment slot="title">
        Representation Shattering in Transformers: A Synthetic Study with
        Knowledge Editing
      </svelte:fragment>
      <svelte:fragment slot="content">
        <i>International Conference on Machine Learning (ICML 2025)</i>
        <p>
          <span><strong>Kento Nishi</strong></span>,
          <span>Rahul Ramesh</span>,
          <span>Maya Okawa</span>,
          <span>Mikail Khona</span>,
          <span>Hidenori Tanaka</span>,
          <span>Ekdeep Singh Lubana</span>
        </p>

        <div class="buttons">
          <a href="https://icml.cc/virtual/2025/poster/46119" target="_blank">
            <button use:exioButton class="popup"
              >ICML Poster / OpenReview</button
            >
          </a>
          <a href="https://arxiv.org/abs/2410.17194" target="_blank">
            <button use:exioButton class="popup">arXiv</button>
          </a>
          <a href="https://arxiv.org/abs/2410.17194.pdf" target="_blank">
            <button use:exioButton class="popup">PDF</button>
          </a>
        </div>
      </svelte:fragment>
    </Card>
    <Card>
      <svelte:fragment slot="title">
        Joint-Task Regularization for Partially Labeled Multi-Task Learning
      </svelte:fragment>
      <svelte:fragment slot="content">
        <i>Conference on Computer Vision and Pattern Recognition (CVPR 2024)</i>
        <p>
          <span><strong>Kento Nishi</strong></span>,
          <span>Junsik Kim</span>,
          <span>Wanhua Li</span>,
          <span>Hanspeter Pfister</span>
        </p>

        <div class="buttons">
          <a
            href="https://cvpr.thecvf.com/virtual/2024/poster/29723"
            target="_blank"
          >
            <button use:exioButton class="popup">CVPR Poster / Video</button>
          </a>
          <a href="https://arxiv.org/abs/2404.01976" target="_blank">
            <button use:exioButton class="popup">arXiv</button>
          </a>
          <a href="https://arxiv.org/pdf/2404.01976.pdf" target="_blank">
            <button use:exioButton class="popup">PDF</button>
          </a>
          <a href="https://kentonishi.com/JTR-CVPR-2024/" target="_blank">
            <button use:exioButton class="popup">Website</button>
          </a>
          <a href="https://github.com/KentoNishi/JTR-CVPR-2024" target="_blank">
            <button use:exioButton class="popup">GitHub</button>
          </a>
        </div>
      </svelte:fragment>
    </Card>
    <Card>
      <svelte:fragment slot="title">
        Towards an Understanding of Stepwise Inference in Transformers: A
        Synthetic Graph Navigation Model
      </svelte:fragment>
      <svelte:fragment slot="content">
        <i>International Conference on Machine Learning (ICML 2024)</i>
        <p>
          Mikail Khona, Maya Okawa, Jan Hula, Rahul Ramesh,
          <span><strong>Kento Nishi</strong></span>, Robert P Dick, Ekdeep Singh
          Lubana, Hidenori Tanaka
        </p>

        <div class="buttons">
          <a href="https://arxiv.org/abs/2402.07757" target="_blank">
            <button use:exioButton class="popup">arXiv</button>
          </a>
          <a href="https://arxiv.org/pdf/2402.07757.pdf" target="_blank">
            <button use:exioButton class="popup">PDF</button>
          </a>
        </div>
      </svelte:fragment>
    </Card>
    <Card>
      <svelte:fragment slot="title">
        Stepwise Inference in Transformers: Exploring a Synthetic Graph
        Navigation Task
      </svelte:fragment>
      <svelte:fragment slot="content">
        <i
          >NeurIPS R0-FoMo Workshop: Robustness of Few-shot and Zero-shot
          Learning in Large Foundation Models (NeurIPS 2023)</i
        >
        <p>
          Mikail Khona, Maya Okawa, Rahul Ramesh,
          <span><strong>Kento Nishi</strong></span>, Robert P Dick, Ekdeep Singh
          Lubana, Hidenori Tanaka
        </p>

        <div class="buttons">
          <a href="https://openreview.net/forum?id=RSGmZ7HZaA" target="_blank">
            <button use:exioButton class="popup">OpenReview</button>
          </a>
          <a href="https://openreview.net/pdf?id=RSGmZ7HZaA" target="_blank">
            <button use:exioButton class="popup">PDF</button>
          </a>
        </div>
      </svelte:fragment>
    </Card>
    <Card>
      <svelte:fragment slot="title">
        Augmentation Strategies for Learning with Noisy Labels
      </svelte:fragment>
      <svelte:fragment slot="content">
        <i>Conference on Computer Vision and Pattern Recognition (CVPR 2021)</i>
        <p>
          <span><strong>Kento Nishi</strong></span>,
          <span>Yi Ding</span>,
          <span>Alex Rich</span>,
          <span>Tobias Höllerer</span>
        </p>

        <div class="buttons">
          <a
            href="https://openaccess.thecvf.com//content/CVPR2021/html/Nishi_Augmentation_Strategies_for_Learning_With_Noisy_Labels_CVPR_2021_paper.html"
            target="_blank"
          >
            <button use:exioButton class="popup">Abstract</button>
          </a>
          <a href="https://arxiv.org/abs/2103.02130" target="_blank">
            <button use:exioButton class="popup">arXiv</button>
          </a>
          <a href="https://arxiv.org/pdf/2103.02130.pdf" target="_blank">
            <button use:exioButton class="popup">PDF</button>
          </a>
          <a
            href="https://github.com/KentoNishi/Augmentation-for-LNL"
            target="_blank"
          >
            <button use:exioButton class="popup">GitHub</button>
          </a>
          <a
            href="https://paperswithcode.com/paper/augmentation-strategies-for-learning-with"
            target="_blank"
          >
            <button use:exioButton class="popup">Papers with Code</button>
          </a>
          <a
            href="https://kentonishi.com/Augmentation-for-LNL/CVPR_Video.mp4"
            target="_blank"
          >
            <button use:exioButton class="popup">CVPR Video</button>
          </a>
        </div>
      </svelte:fragment>
    </Card>
    <Card>
      <svelte:fragment slot="title">
        Improving Label Noise Robustness with Data Augmentation and
        Semi-Supervised Learning (Student Abstract)
      </svelte:fragment>
      <svelte:fragment slot="content">
        <i>
          Proceedings of the AAAI Conference on Artificial Intelligence (AAAI
          2021)
        </i>
        <p>
          <span><strong>Kento Nishi</strong></span>,
          <span>Yi Ding</span>,
          <span>Alex Rich</span>,
          <span>Tobias Höllerer</span>
        </p>

        <div class="buttons">
          <a
            href="https://ojs.aaai.org/index.php/AAAI/article/view/17924"
            target="_blank"
          >
            <button use:exioButton class="popup">Abstract</button>
          </a>
          <a
            href="https://www.aaai.org/AAAI21Papers/SA-207.NishiK.pdf"
            target="_blank"
          >
            <button use:exioButton class="popup">PDF</button>
          </a>
        </div>
      </svelte:fragment>
    </Card>
  </Cards>
</div>
