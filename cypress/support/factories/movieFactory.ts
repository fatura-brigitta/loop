export function movieFactory(overrides: any = {}) {
  return {
    title: "Cypress Test Movie",
    director: "Christopher Nolan",
    actors: "Leonardo DiCaprio, Joseph Gordon-Levitt",
    playtime: 148,
    language: "EN",

    trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E",

    poster: "https://image.tmdb.org/t/p/w500/6KiSSndIMLj1swkpPNq2lYppDVQ.jpg",

    backdrop: "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg",

    onscreen: true,
    genre: "Sci-Fi",
    description: "Movie created by Cypress test",

    ...overrides
  }
}