import jsonData from '../data/Data.json' assert {type: "json"};
const entries = jsonData.resume

export function get_data(keyword = "all") {
    const searched = keyword.toLowerCase()
    if (searched == "all") {
        return entries
    }
    else {
        let results = [];
        for (let i = 0; i < entries.length; i++) {
            let item = [entries[i].basics.AppliedFor, ...entries[i].skills.keywords]
            for (let j = 0; j < item.length; j++) {
                if (searched === item[j].toLowerCase()) {
                    results.push(entries[i])
                    break
                }
            }
        }
        return results
    }
}

