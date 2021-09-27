class Github {
  constructor() {
    this.client_id = 'd1fb18799ff059eafbff'
    this.client_secret = '5f4b7b21bd3e8633da08ca89256e5578ecc059a4'
    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    )

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    )

    const profile = await profileResponse.json()
    const repos = await repoResponse.json()
    return {
      profile,
      repos,
    }
  }
}
