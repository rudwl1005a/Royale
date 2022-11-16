import create from "zustand";

// export const useStore = create((set) => ({
//     leagueSeq1: 0,
//     setLeagueSeq1() {
//         set((state) => ({ leagueSeq1: state }))},
// }));
export const leagueStore = create(
    ((set) => ({
        leagueSeq: 0,
        setLeagueSeq: (input) => set({ leagueSeq: input }),
    }))
);

export const divisionStore = create(
    ((set) => ({
        divisionSeq: 0,
        setDevisionSeq: (input) => set({ divisionSeq: input }),
    }))
);