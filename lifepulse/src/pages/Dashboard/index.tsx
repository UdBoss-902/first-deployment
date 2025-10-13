// src/pages/Dashboard/index.jsx
import React, { useState } from "react";
import CardVital from "../../components/CardVital";
import HabitCounter from "../../components/HabitCounter";
import MoodLogger from "../../components/MoodLogger";
import SleepInput from "../../components/SleepInput";
import SleepChart from "../../components/SleepChart";
import GoalTracker from "../../components/GoalTracker";
import StreakTracker from "../../components/StreakTracker"
import WeeklySummary from "../../components/WeeklySummary";
import ActionList from "../../components/ActionList";
import ResetButton from "../../components/ResetButton";
import HelpButton from "../../components/HelpButton";
import { loadData } from "../../utils/storage";


export default function Dashboard() {
  const [sleepData, setSleepData] = useState(loadData("sleepData") || []);

  return (
    <div  style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            padding: "20px",
          }}
        >
      <CardVital title="Water Intake">
        <HabitCounter habit="Water" />
        <GoalTracker habit="Water" defaultGoal={8} />
      </CardVital>

      <CardVital title="Exercise">
        <HabitCounter habit="Exercise" />
        <GoalTracker habit="Exercise" defaultGoal={1} />
      </CardVital>

      <CardVital title="Mood">
        <MoodLogger />
      </CardVital>

      <CardVital title="Sleep Tracker">
        <SleepInput onUpdate={setSleepData} />
        <div style={{ height: "300px" }}>
            <SleepChart data={sleepData} />
        </div>
      </CardVital>


      <CardVital title="Weekly Summary">
        <WeeklySummary />
      </CardVital>

      <CardVital title="Streak Tracker">
          <StreakTracker habit={undefined} />
      </CardVital>

      <CardVital title="Action List">
        <ActionList />
      </CardVital>

      <CardVital title="Danger Zone">
        <p>This will erase all your progress and records.</p>
        <ResetButton />
      </CardVital>

      <CardVital title="Need Help?">
        <p>Click below to learn how to use LifePulse.</p>
          <HelpButton />
      </CardVital>
    </div>
  );
}
