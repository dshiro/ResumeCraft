<script setup lang="ts">
import AwardsCard from "@/components/Card/AwardsCard.vue";
import BasicsCard from "@/components/Card/BasicsCard.vue";
import EducationCard from "@/components/Card/EducationCard.vue";
import InterestsCard from "@/components/Card/InterestsCard.vue";
import LanguagesCard from "@/components/Card/LanguagesCard.vue";
import ProjectsCard from "@/components/Card/ProjectsCard.vue";
import PublicationsCard from "@/components/Card/PublicationsCard.vue";
import ReferencesCard from "@/components/Card/ReferencesCard.vue";
import SkillsCard from "@/components/Card/SkillsCard.vue";
import VolunteerCard from "@/components/Card/VolunteerCard.vue";
import WorkCard from "@/components/Card/WorkCard.vue";

import resumeData from "@/assets/resume.json";
const data = resumeData;
</script>

<template>
  <div class="gap-2 sm:grid lg:grid-cols-3 text-[0.8rem]">
    <div class="space-y-5">
      <BasicsCard :data="data.basics" />
    </div>
    <div
      class="mt-4 space-y-5 sm:mt-0 lg:col-span-2 lg:overflow-y-auto lg:h-screen">
      <WorkCard v-if="data.work && data.work.length > 0" :data="data.work" />

      <EducationCard
        v-if="data.education && data.education.length > 0"
        :data="data.education" />

      <SkillsCard
        v-if="data.skills && data.skills.length > 0"
        :data="data.skills" />

      <LanguagesCard
        v-if="data.languages && data.languages.length > 0"
        :data="data.languages" />

      <InterestsCard
        v-if="data.interests && data.interests.length > 0"
        :data="data.interests" />

      <!-- <ProjectsCard
        v-if="data.projects && data.projects.length > 0"
        :data="data.projects" />

      <AwardsCard
        v-if="data.awards && data.awards.length > 0"
        :data="data.awards" />

      <PublicationsCard
        v-if="data.publications && data.publications.length > 0"
        :data="data.publications" />

      <ReferencesCard
        v-if="data.references && data.references.length > 0"
        :data="data.references" />

      <VolunteerCard
        v-if="data.volunteer && data.volunteer.length > 0"
        :data="data.volunteer" /> -->
    </div>
  </div>
</template>

<style>
.card {
  @apply m-2;
  @apply p-2;
  @apply rounded-md;
  @apply border;
  @apply break-words;

  @apply bg-slate-50;
  @apply text-gray-800;
  @apply border-gray-300;
}

html.dark .card {
  @apply bg-zinc-800;
  @apply text-gray-200;
  @apply border-gray-600;
}

@media screen and (max-width: 1024px) {
  .card {
    @apply m-0;
    @apply p-0;
    @apply mb-5;
    @apply rounded-none;
    @apply py-2;
    @apply border-none;
  }
}
</style>
