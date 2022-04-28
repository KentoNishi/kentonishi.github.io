<script lang="ts">
  import { exioZoomInAnimation } from 'exio';
  import Cards from '../components/Cards.svelte';
  import Card from '../components/Card.svelte';
  import { exioButton } from 'exio';
</script>

<div use:exioZoomInAnimation>
  <Cards>
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

        <p>
          Imperfect labels are ubiquitous in real-world datasets. Several recent
          successful methods for training deep neural networks (DNNs) robust to
          label noise have used two primary techniques: filtering samples based
          on loss during a warm-up phase to curate an initial set of cleanly
          labeled samples, and using the output of a network as a pseudo-label
          for subsequent loss calculations. In this paper, we evaluate different
          augmentation strategies for algorithms tackling the "learning with
          noisy labels" problem. We propose and examine multiple augmentation
          strategies and evaluate them using synthetic datasets based on
          CIFAR-10 and CIFAR-100, as well as on the real-world dataset
          Clothing1M. Due to several commonalities in these algorithms, we find
          that using one set of augmentations for loss modeling tasks and
          another set for learning is the most effective, improving results on
          the state-of-the-art and other previous methods. Furthermore, we find
          that applying augmentation during the warm-up period can negatively
          impact the loss convergence behavior of correctly versus incorrectly
          labeled samples. We introduce this augmentation strategy to the
          state-of-the-art technique and demonstrate that we can improve
          performance across all evaluated noise levels. In particular, we
          improve accuracy on the CIFAR-10 benchmark at 90% symmetric noise by
          more than 15% in absolute accuracy, and we also improve performance on
          the real-world dataset Clothing1M.
        </p>
        <div class="buttons">
          <a href="https://arxiv.org/abs/2103.02130" target="_blank">
            <button use:exioButton>View on arXiv</button>
          </a>
          <a href="https://arxiv.org/pdf/2103.02130.pdf" target="_blank">
            <button use:exioButton>View PDF</button>
          </a>
          <a
            href="https://github.com/KentoNishi/Augmentation-for-LNL"
            target="_blank"
          >
            <button use:exioButton>View code on GitHub</button>
          </a>
          <a
            href="https://kentonishi.github.io/Augmentation-for-LNL/CVPR_Video.mp4"
            target="_blank"
          >
            <button use:exioButton>Watch CVPR Video</button>
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

        <p>
          Modern machine learning algorithms typically require large amounts of
          labeled training data to fit a reliable model. To minimize the cost of
          data collection, researchers often employ techniques such as
          crowdsourcing and web scraping. However, web data and human
          annotations are known to exhibit high margins of error, resulting in
          sizable amounts of incorrect labels. Poorly labeled training data can
          cause models to overfit to the noise distribution, crippling
          performance in real-world applications. In this work, we investigate
          the viability of using data augmentation in conjunction with
          semi-supervised learning to improve the label noise robustness of
          image classification models. We conduct several experiments using
          noisy variants of the CIFAR-10 image classification dataset to
          benchmark our method against existing algorithms. Experimental results
          show that our augmentative SSL approach improves upon the
          state-of-the-art.
        </p>
      </svelte:fragment>
    </Card>
  </Cards>
</div>

<style>
  a {
    color: var(--blue-accent);
    font-weight: bold;
  }
  .buttons a {
    text-decoration: none;
    color: inherit;
  }
  button {
    background-color: var(--gray-accent);
    cursor: pointer;
  }
  .buttons {
    display: flex;
    gap: 0.75rem;
  }
</style>
