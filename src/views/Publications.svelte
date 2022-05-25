<script lang="ts">
  import { exioZoomInAnimation } from 'exio';
  import Cards from '../components/Cards.svelte';
  import Card from '../components/Card.svelte';
  import { exioButton } from 'exio';
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
        Augmentation Strategies for Learning with Noisy Labels
      </svelte:fragment>
      <svelte:fragment slot="content">
        <i>Conference on Computer Vision and Pattern Recognition (2021)</i>
        <p>
          <a href="mailto:kento24gs@outlook.com">Kento Nishi</a>*,
          <a href="mailto:yding@cs.ucsb.edu">Yi Ding</a>*,
          <a href="mailto:anrich@cs.ucsb.edu">Alex Rich</a>,
          <a href="mailto:holl@cs.ucsb.edu">Tobias Höllerer</a>
          [<code>*</code>:
          <a href="mailto:kento24gs@outlook.com,yding@cs.ucsb.edu"
            >equal contribution</a
          >]
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
            href="https://kentonishi.github.io/Augmentation-for-LNL/CVPR_Video.mp4"
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
          Proceedings of the AAAI Conference on Artificial Intelligence (2021)
        </i>
        <p>
          <a href="mailto:kento24gs@outlook.com">Kento Nishi</a>,
          <a href="mailto:yding@cs.ucsb.edu">Yi Ding</a>,
          <a href="mailto:anrich@cs.ucsb.edu">Alex Rich</a>,
          <a href="mailto:holl@cs.ucsb.edu">Tobias Höllerer</a>
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
