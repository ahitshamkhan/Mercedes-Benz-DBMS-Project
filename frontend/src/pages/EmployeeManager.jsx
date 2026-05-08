import { useState } from 'react';
import { Star, LayoutDashboard, Car, ShoppingCart, Users, Warehouse, Search, Plus, Edit3, Trash2, X, Briefcase, MapPin, Phone, Mail, Calendar, Award, MoreVertical } from 'lucide-react';

const INITIAL_EMPLOYEES = [
  { id: 1, name: 'Imran Malik', role: 'General Manager', department: 'Management', location: 'Lahore', email: 'imran@mercedes-benz.pk', phone: '+92 321 1234567', joined: 'Jan 2019', salary: 450000, status: 'Active', performance: 95 },
  { id: 2, name: 'Sara Qureshi', role: 'Sales Director', department: 'Sales', location: 'Lahore', email: 'sara@mercedes-benz.pk', phone: '+92 333 9876543', joined: 'Mar 2020', salary: 350000, status: 'Active', performance: 92 },
  { id: 3, name: 'Ali Hassan', role: 'Service Manager', department: 'Service', location: 'Karachi', email: 'ali@mercedes-benz.pk', phone: '+92 300 5551234', joined: 'Jun 2018', salary: 380000, status: 'Active', performance: 88 },
  { id: 4, name: 'Fatima Zaidi', role: 'Sales Associate', department: 'Sales', location: 'Lahore', email: 'fatima@mercedes-benz.pk', phone: '+92 312 4445678', joined: 'Sep 2021', salary: 180000, status: 'Active', performance: 90 },
  { id: 5, name: 'Omar Raza', role: 'Technician', department: 'Service', location: 'Karachi', email: 'omar@mercedes-benz.pk', phone: '+92 345 7778901', joined: 'Nov 2022', salary: 150000, status: 'On Leave', performance: 85 },
  { id: 6, name: 'Hina Shah', role: 'Finance Manager', department: 'Finance', location: 'Islamabad', email: 'hina@mercedes-benz.pk', phone: '+92 311 2223456', joined: 'Feb 2020', salary: 320000, status: 'Active', performance: 93 },
  { id: 7, name: 'Zain Aslam', role: 'Junior Technician', department: 'Service', location: 'Lahore', email: 'zain@mercedes-benz.pk', phone: '+92 322 8889012', joined: 'Apr 2023', salary: 120000, status: 'Active', performance: 78 },
  { id: 8, name: 'Nadia Khan', role: 'HR Coordinator', department: 'HR', location: 'Islamabad', email: 'nadia@mercedes-benz.pk', phone: '+92 301 3334567', joined: 'Aug 2021', salary: 200000, status: 'Active', performance: 87 },
];

const DEPARTMENTS = ['All', 'Management', 'Sales', 'Service', 'Finance', 'HR'];
const STATUS_COLORS = { Active: '#2ecc71', 'On Leave': '#f39c12', Terminated: '#e74c3c' };

const SIDEBAR = [
  { label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
  { label: 'Manage Cars', icon: <Car size={18} /> },
  { label: 'Orders', icon: <ShoppingCart size={18} /> },
  { label: 'Customers', icon: <Users size={18} /> },
  { label: 'Employees', icon: <Briefcase size={18} />, active: true },
];

export default function EmployeeManager() {
  const [employees, setEmployees] = useState(INITIAL_EMPLOYEES);
  const [search, setSearch] = useState('');
  const [deptFilter, setDeptFilter] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [editEmp, setEditEmp] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [selectedEmp, setSelectedEmp] = useState(null);

  const filtered = employees.filter((e) => {
    const ms = e.name.toLowerCase().includes(search.toLowerCase()) || e.role.toLowerCase().includes(search.toLowerCase());
    const md = deptFilter === 'All' || e.department === deptFilter;
    return ms && md;
  });

  const totalSalary = employees.reduce((s, e) => s + e.salary, 0);
  const avgPerf = Math.round(employees.reduce((s, e) => s + e.performance, 0) / employees.length);

  const openAdd = () => { setEditEmp({ id: Date.now(), name: '', role: '', department: 'Sales', location: 'Lahore', email: '', phone: '', joined: 'May 2024', salary: 0, status: 'Active', performance: 80 }); setShowModal(true); };
  const openEdit = (emp) => { setEditEmp({ ...emp }); setShowModal(true); };
  const saveEmp = () => {
    setEmployees((prev) => {
      const exists = prev.find((e) => e.id === editEmp.id);
      return exists ? prev.map((e) => e.id === editEmp.id ? editEmp : e) : [...prev, editEmp];
    });
    setShowModal(false); setEditEmp(null);
  };
  const confirmDelete = () => { setEmployees((prev) => prev.filter((e) => e.id !== deleteId)); setDeleteId(null); };

  const perfColor = (p) => p >= 90 ? '#2ecc71' : p >= 80 ? '#f39c12' : '#e74c3c';
  const inputStyle = { width: '100%', padding: '10px 12px', background: '#0d0d14', border: '1px solid rgba(200,169,126,0.12)', borderRadius: 4, color: '#e4e1eb', fontSize: 13, fontFamily: "'DM Sans', sans-serif", outline: 'none' };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#0a0a0f', color: '#e4e1eb', minHeight: '100vh', display: 'flex' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        input:focus, select:focus { border-color:#C8A97E !important; outline:none; }
        a { text-decoration:none; color:inherit; }
      `}</style>

      {/* SIDEBAR */}
      <aside style={{ width: 240, background: '#0d0d14', borderRight: '1px solid rgba(200,169,126,0.08)', padding: '28px 0', position: 'fixed', top: 0, bottom: 0 }}>
        <div style={{ padding: '0 24px', marginBottom: 36 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', border: '1.5px solid #C8A97E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Star size={14} color="#C8A97E" /></div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, color: '#fff' }}>MB Admin</span>
          </div>
        </div>
        <nav>
          {SIDEBAR.map((link) => (
            <div key={link.label} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '11px 24px', cursor: 'pointer',
              background: link.active ? 'rgba(200,169,126,0.06)' : 'transparent',
              borderLeft: link.active ? '2px solid #C8A97E' : '2px solid transparent',
              color: link.active ? '#C8A97E' : '#5a5768', fontSize: 13,
            }}>{link.icon} {link.label}</div>
          ))}
        </nav>
      </aside>

      {/* MAIN */}
      <main style={{ marginLeft: 240, flex: 1, padding: '32px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 300, color: '#fff', marginBottom: 4 }}>Employee Manager</h1>
            <p style={{ fontSize: 13, color: '#5a5768' }}>{employees.length} team members across all departments</p>
          </div>
          <button onClick={openAdd} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 20px', background: '#C8A97E', border: 'none', borderRadius: 4, color: '#0a0a0f', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
            <Plus size={16} /> Add Employee
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 28 }}>
          {[
            { label: 'Total Employees', value: employees.length },
            { label: 'Departments', value: new Set(employees.map((e) => e.department)).size },
            { label: 'Monthly Payroll', value: `PKR ${(totalSalary / 1000).toFixed(0)}K` },
            { label: 'Avg. Performance', value: `${avgPerf}%` },
          ].map((s) => (
            <div key={s.label} style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 8, padding: '18px 20px' }}>
              <p style={{ fontSize: 22, fontWeight: 600, color: '#fff' }}>{s.value}</p>
              <p style={{ fontSize: 11, color: '#5a5768', marginTop: 2 }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <Search size={15} color="#4e453b" style={{ position: 'absolute', left: 14, top: 12 }} />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name or role..."
              style={{ ...inputStyle, paddingLeft: 40, background: '#111118' }} />
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            {DEPARTMENTS.map((d) => (
              <button key={d} onClick={() => setDeptFilter(d)} style={{
                padding: '7px 14px', fontSize: 11, fontWeight: 500,
                border: deptFilter === d ? '1px solid #C8A97E' : '1px solid rgba(200,169,126,0.12)',
                background: deptFilter === d ? '#C8A97E' : 'transparent',
                color: deptFilter === d ? '#0a0a0f' : '#6b6880',
                borderRadius: 2, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
              }}>{d}</button>
            ))}
          </div>
        </div>

        {/* TABLE */}
        <div style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 8, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                {['Employee', 'Department', 'Location', 'Performance', 'Salary', 'Status', 'Actions'].map((h) => (
                  <th key={h} style={{ textAlign: 'left', padding: '13px 16px', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b', borderBottom: '1px solid rgba(200,169,126,0.06)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((emp) => (
                <tr key={emp.id} style={{ borderBottom: '1px solid rgba(200,169,126,0.04)' }}>
                  <td style={{ padding: '14px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'rgba(200,169,126,0.08)', border: '1px solid rgba(200,169,126,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ fontSize: 14, fontWeight: 600, color: '#C8A97E' }}>{emp.name.split(' ').map((n) => n[0]).join('')}</span>
                      </div>
                      <div>
                        <p style={{ fontSize: 13, fontWeight: 500, color: '#e4e1eb' }}>{emp.name}</p>
                        <p style={{ fontSize: 11, color: '#4e453b' }}>{emp.role}</p>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '14px 16px', fontSize: 12, color: '#9a97a5' }}>{emp.department}</td>
                  <td style={{ padding: '14px 16px', fontSize: 12, color: '#6b6880', display: 'flex', alignItems: 'center', gap: 4 }}><MapPin size={11} /> {emp.location}</td>
                  <td style={{ padding: '14px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 60, height: 6, background: '#1f1f26', borderRadius: 3, overflow: 'hidden' }}>
                        <div style={{ width: `${emp.performance}%`, height: '100%', background: perfColor(emp.performance), borderRadius: 3 }} />
                      </div>
                      <span style={{ fontSize: 12, fontWeight: 500, color: perfColor(emp.performance) }}>{emp.performance}%</span>
                    </div>
                  </td>
                  <td style={{ padding: '14px 16px', fontSize: 13, color: '#9a97a5' }}>PKR {(emp.salary / 1000).toFixed(0)}K</td>
                  <td style={{ padding: '14px 16px' }}>
                    <span style={{ padding: '3px 10px', background: `${STATUS_COLORS[emp.status]}15`, border: `1px solid ${STATUS_COLORS[emp.status]}30`, borderRadius: 20, fontSize: 10, fontWeight: 500, color: STATUS_COLORS[emp.status] }}>{emp.status}</span>
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button onClick={() => setSelectedEmp(emp)} style={{ width: 30, height: 30, borderRadius: 4, background: 'rgba(200,169,126,0.06)', border: '1px solid rgba(200,169,126,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Award size={13} color="#C8A97E" /></button>
                      <button onClick={() => openEdit(emp)} style={{ width: 30, height: 30, borderRadius: 4, background: 'rgba(200,169,126,0.06)', border: '1px solid rgba(200,169,126,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Edit3 size={13} color="#C8A97E" /></button>
                      <button onClick={() => setDeleteId(emp.id)} style={{ width: 30, height: 30, borderRadius: 4, background: 'rgba(231,76,60,0.06)', border: '1px solid rgba(231,76,60,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Trash2 size={13} color="#e74c3c" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* ADD/EDIT MODAL */}
      {showModal && editEmp && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setShowModal(false)}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.15)', borderRadius: 8, padding: '32px', width: 500 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 400, color: '#fff' }}>{INITIAL_EMPLOYEES.find((e) => e.id === editEmp.id) ? 'Edit Employee' : 'Add Employee'}</h3>
              <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={18} color="#5a5768" /></button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div><label style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b', marginBottom: 4, display: 'block' }}>Name</label><input style={inputStyle} value={editEmp.name} onChange={(e) => setEditEmp({ ...editEmp, name: e.target.value })} /></div>
                <div><label style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b', marginBottom: 4, display: 'block' }}>Role</label><input style={inputStyle} value={editEmp.role} onChange={(e) => setEditEmp({ ...editEmp, role: e.target.value })} /></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div><label style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b', marginBottom: 4, display: 'block' }}>Department</label>
                  <select style={{ ...inputStyle, appearance: 'none' }} value={editEmp.department} onChange={(e) => setEditEmp({ ...editEmp, department: e.target.value })}>
                    {DEPARTMENTS.filter((d) => d !== 'All').map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <div><label style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b', marginBottom: 4, display: 'block' }}>Location</label>
                  <select style={{ ...inputStyle, appearance: 'none' }} value={editEmp.location} onChange={(e) => setEditEmp({ ...editEmp, location: e.target.value })}>
                    {['Lahore', 'Karachi', 'Islamabad'].map((l) => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div><label style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b', marginBottom: 4, display: 'block' }}>Email</label><input style={inputStyle} value={editEmp.email} onChange={(e) => setEditEmp({ ...editEmp, email: e.target.value })} /></div>
                <div><label style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b', marginBottom: 4, display: 'block' }}>Salary (PKR)</label><input type="number" style={inputStyle} value={editEmp.salary} onChange={(e) => setEditEmp({ ...editEmp, salary: parseInt(e.target.value) || 0 })} /></div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              <button onClick={() => setShowModal(false)} style={{ flex: 1, padding: '12px', background: 'none', border: '1px solid rgba(200,169,126,0.15)', color: '#6b6880', fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Cancel</button>
              <button onClick={saveEmp} style={{ flex: 1, padding: '12px', background: '#C8A97E', border: '1px solid #C8A97E', color: '#0a0a0f', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Save</button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW PROFILE MODAL */}
      {selectedEmp && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setSelectedEmp(null)}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.15)', borderRadius: 8, padding: '32px', width: 420, textAlign: 'center' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(200,169,126,0.1)', border: '2px solid rgba(200,169,126,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <span style={{ fontSize: 24, fontWeight: 600, color: '#C8A97E' }}>{selectedEmp.name.split(' ').map((n) => n[0]).join('')}</span>
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 500, color: '#fff', marginBottom: 4 }}>{selectedEmp.name}</h3>
            <p style={{ fontSize: 13, color: '#C8A97E', marginBottom: 20 }}>{selectedEmp.role} — {selectedEmp.department}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, textAlign: 'left', marginBottom: 20 }}>
              {[['Location', selectedEmp.location], ['Joined', selectedEmp.joined], ['Email', selectedEmp.email], ['Phone', selectedEmp.phone], ['Salary', `PKR ${(selectedEmp.salary / 1000).toFixed(0)}K`], ['Status', selectedEmp.status]].map(([k, v]) => (
                <div key={k}><p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#4e453b', marginBottom: 3 }}>{k}</p><p style={{ fontSize: 13, color: '#e4e1eb' }}>{v}</p></div>
              ))}
            </div>
            <div style={{ marginBottom: 20 }}>
              <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#4e453b', marginBottom: 8, textAlign: 'left' }}>Performance</p>
              <div style={{ height: 8, background: '#1f1f26', borderRadius: 4, overflow: 'hidden' }}>
                <div style={{ width: `${selectedEmp.performance}%`, height: '100%', background: perfColor(selectedEmp.performance), borderRadius: 4, transition: 'width 0.6s' }} />
              </div>
              <p style={{ fontSize: 14, fontWeight: 600, color: perfColor(selectedEmp.performance), marginTop: 6, textAlign: 'right' }}>{selectedEmp.performance}%</p>
            </div>
            <button onClick={() => setSelectedEmp(null)} style={{ width: '100%', padding: '12px', background: 'none', border: '1px solid rgba(200,169,126,0.2)', color: '#6b6880', fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Close</button>
          </div>
        </div>
      )}

      {/* DELETE CONFIRM */}
      {deleteId && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#111118', border: '1px solid rgba(231,76,60,0.2)', borderRadius: 8, padding: '32px', width: 400, textAlign: 'center' }}>
            <Trash2 size={32} color="#e74c3c" style={{ marginBottom: 16 }} />
            <h3 style={{ fontSize: 18, fontWeight: 500, color: '#fff', marginBottom: 8 }}>Remove Employee?</h3>
            <p style={{ fontSize: 13, color: '#6b6880', marginBottom: 24 }}>This will permanently remove this team member from the system.</p>
            <div style={{ display: 'flex', gap: 10 }}>
              <button onClick={() => setDeleteId(null)} style={{ flex: 1, padding: '12px', background: 'none', border: '1px solid rgba(200,169,126,0.15)', color: '#6b6880', fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Cancel</button>
              <button onClick={confirmDelete} style={{ flex: 1, padding: '12px', background: '#e74c3c', border: '1px solid #e74c3c', color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Remove</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
