<template>
  <div class="about">
    <div class="about-alex">
      <div class="about-content">
        <p class="about-title">
          Design technologist specialized in systems that help people. User focus. Problem-solver. Advocate of exceptional design.
        </p>
        <p class="text regular">
          Great design happens where user needs and business goals align. With 10+ years of experience, I’ve partnered with researchers, designers, and developers to craft products used by millions.
          <br /><br />
          I’m passionate about solving complex problems with creativity and empathy—from enhancing user experiences to exploring emerging technologies. I strive to create environments where people feel valued and can grow together.
          <br /><br />
          Outside work I enjoy playing and studying video games, chasing a flying disc in Ultimate Frisbee tournaments, and traveling as much as I can.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.about {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: var(--spacing-10x);
  margin-top: var(--spacing-10x);
  .about-alex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: var(--spacing-10x);
    .about-content {
      max-width: var(--width-sm);
      .about-title {
        font-size: 36px;
        line-height: 46px;
        font-weight: var(--font-weight-bold);
        margin-bottom: var(--spacing-10x);
      }
    }
  }
}
</style>