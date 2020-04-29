import React, {useEffect, useState} from 'react';
import { Table, Typography } from 'antd'
import 'antd/dist/antd.css'



const ranks = {"Corporal": 25000000, "Sergant": 100000000, "Lieutenant":250000000,"Captain": 400000000, "General": 500000000}

const rankArray = Object.keys(ranks)

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Current Rank',
    dataIndex: 'rank',
    key: 'rank',
  },
  {
    title: 'Experience',
    dataIndex: 'experience',
    key: 'experience',
    render: (record) => record.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  },
];

function App() {
  const [membersWhoNeedRank, setMembersWhoNeedRank] = useState([])
  useEffect(() => {

    const getClanMembers = async () => {
      const soulfireMembers = await fetch('https://api.russell.work/runescape')
      const members = await soulfireMembers.json()
      const membersUpgrade = []
    
        members.body.forEach( (member) => {
     
        const memberRankIndex = rankArray.findIndex(rank => rank === member.rank)
        if ((memberRankIndex >= 0) && memberRankIndex < (rankArray.length - 1)) {
            const memberNextRank = rankArray[memberRankIndex + 1]
            const memberNextRankXp = ranks[memberNextRank]
            if (memberNextRankXp < member.experience) {
                membersUpgrade.push(member)
            }
        }
    })
    setMembersWhoNeedRank(membersUpgrade)
    }
    getClanMembers()

  }, [])
  return (
    <div>
      <Typography.Title>List of everyone who can rank up based on their current XP</Typography.Title>
      <Table dataSource={membersWhoNeedRank} columns={columns} pagination={false} size='small' />;
    </div>
  );
}

export default App;
