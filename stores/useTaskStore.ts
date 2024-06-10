interface TaskProps {
  task: Array<Task>;
}

export const useTaskStore = defineStore("task", {
  state(): TaskProps {
    return {
      task: [
        {
          name: "Close off Case #012920- RODRIGUES, Amiguel",
          date: "12/06/2024",
          description:
            "Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!",
          isExpanded: false,
          isEdit: false,
        },
        {
          name: "Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203",
          date: "14/06/2024",
          description:
            "All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in.",
          isExpanded: false,
          isEdit: false,
        },
        {
          name: "Set up appointment with Dr Blake",
          date: "22/06/2024",
          description: null,
          isExpanded: false,
          isEdit: false,
        },
      ],
    };
  },
});
