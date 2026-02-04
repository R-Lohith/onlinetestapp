import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Bell, CheckSquare, Code, LogOut } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Sora', sans-serif; }

        .dashboard {
          display: flex;
          height: 100vh;
          background: #0f1117;
          color: #e5e7eb;
        }

        /* SIDEBAR */
        .sidebar {
          width: 240px;
          background: #131622;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .logo {
          font-size: 20px;
          font-weight: 700;
          color: #8b5cf6;
        }

        .menu {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 20px;
        }

        .menu-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: 10px;
          cursor: pointer;
          color: #c7c9d3;
        }

        .menu-item.active,
        .menu-item:hover {
          background: #1e2235;
          color: #8b5cf6;
        }

        .logout {
          margin-top: auto;
          color: #ef4444;
        }

        /* MAIN */
        .main {
          flex: 1;
          padding: 24px 32px;
        }

        /* NAVBAR */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 28px;
        }

        .user {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .avatar {
          background: #8b5cf6;
          color: white;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }

        /* WELCOME */
        .welcome {
          background: linear-gradient(135deg, #1f2340, #272b55);
          padding: 24px;
          border-radius: 18px;
          margin-bottom: 28px;
        }

        .welcome h2 {
          margin-bottom: 6px;
        }

        /* STATS */
        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 30px;
        }

        .card {
          background: #151a2c;
          padding: 22px;
          border-radius: 16px;
        }

        .card h1 {
          margin-top: 12px;
          font-size: 28px;
        }

        .card span {
          font-size: 13px;
          color: #9ca3af;
        }

        /* ACTIVITY */
        .activity h3 {
          margin-bottom: 14px;
        }

        .activity-item {
          background: #151a2c;
          padding: 16px 18px;
          border-radius: 14px;
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .score {
          color: #22c55e;
          font-weight: 600;
        }
      `}</style>

      {/* SIDEBAR */}
      <div className="sidebar">
        <div className="logo">BIT Test Portal</div>

        <div className="menu">
          <div className="menu-item active">
            <CheckSquare size={18} /> MCQ
          </div>
          <div className="menu-item">
            <Code size={18} /> Coding
          </div>
          <div className="menu-item">
            <CheckSquare size={18} /> Result Checker
          </div>
        </div>

        <div className="menu-item logout">
          <LogOut size={18} /> Logout
        </div>
      </div>

      {/* MAIN */}
      <div className="main">
        {/* NAVBAR */}
        <div className="navbar">
          <h1>Dashboard</h1>
          <div className="user">
            <Bell size={20} />
            <div className="avatar">RK</div>
          </div>
        </div>

        {/* WELCOME */}
        <div className="welcome">
          <h2>Welcome back, Rahul 👋</h2>
          <p>You have 3 upcoming MCQ tests and 5 coding challenges pending.</p>
        </div>

        {/* STATS */}
        <div className="stats">
          <div className="card">
            <span>MCQ Tests Completed</span>
            <h1>24</h1>
          </div>
          <div className="card">
            <span>Problems Solved</span>
            <h1>18</h1>
          </div>
          <div className="card">
            <span>Average Score</span>
            <h1>82%</h1>
          </div>
        </div>

        {/* RECENT ACTIVITY */}
        <div className="activity">
          <h3>Recent Activity</h3>

          <div className="activity-item">
            <div>Data Structures – MCQ Round 3</div>
            <div className="score">18 / 20</div>
          </div>

          <div className="activity-item">
            <div>Binary Search – Easy</div>
            <div className="score">Solved</div>
          </div>

          <div className="activity-item">
            <div>Semester Mid-Term Result</div>
            <div className="score">76%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
