const comics = [
  {text: 'Sea of Stars', done: false, issues: 7},
  {text: 'Manifest Destiny', done: false, issues: 44},
  {text: 'A Righteous Thirst for Vengance', done: false, issues: 1},
  {text: 'Nocterra', done: false, issues: 9},
  {text: 'Are You Afraid of Darkseid?', done: true, issues: 1},
  {text: 'Search for Hu', done: false, issues: 1},
  {text: 'Mazebook', done: false, issues: 1},
  {text: 'Dark Knights: Metal', done: true, issues: 8},
  {text: 'Dark Knights: Death Metal', done: true, issues: 33},
  {text: 'Batman 89', done: true, issues: 6},
  {text: 'The Good Asian', done: false, issues: 5},
  {text: 'SW: War of the Bounty Hunters', done: false, issues: 52},
  {text: 'Black Science', done: true, issues: 43},
  {text: 'The Last Ronin', done: false, issues: 4},
  {text: 'King Spawn', done: false, issues: 2},
  {text: 'Gunsliger Spawn', done: false, issues: 0},
  {text: 'Red Room', done: true, issues: 1},
  {text: 'Seven to Eternity', done: true, issues: 17},
  {text: 'Eve', done: false, issues: 5},
  {text: 'Batman: The Adventures Continue', done: false, issues: 14},
  {text: 'Batman: The Audio Adventures Special', done: true, issues: 1},
]

const find = (conditions, callback) => {
  try {
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    if (Object.keys(conditions).length === 0) return callback(null, comics)
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export { 
	find
}