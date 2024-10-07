import { defineStore } from 'pinia';

export const useProjectStore = defineStore('projects', {
  state: () => ({
    projects: [
        {
            img: "images/HRMIS.png",
            detail: "mptc hrmis desc",
            header:"mptc hrmis"
         },
          {
            img: "images/mobile.png",
            detail:
              "mobile app desc",
            header:"mobile app"
          },
          {
            img: "images/moi.png",
            detail:
              "moi-sacmis desc",
            header:"moi-sacmis"
          },
    ]
  })
});
export default useProjectStore