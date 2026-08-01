import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, Sparkles, Receipt, ShieldCheck, Download, Plus, Trash2, Printer,
  CheckCircle2, Cloud, Database, BarChart3, Calculator, Eye, User, FileText,
  CreditCard, ArrowRight, Percent
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BillingDemoModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('generator');
  const [clientName, setClientName] = useState('Acme Technologies Pvt Ltd');
  const [clientGstin, setClientGstin] = useState('09AAACA12341Z5');
  const [discount, setDiscount] = useState(0);
  const [taxMode, setTaxMode] = useState('intrastate'); // intrastate (CGST+SGST) vs interstate (IGST)
  const [viewSheet, setViewSheet] = useState(false); // Toggle printable invoice sheet

  const [items, setItems] = useState([
    { id: 1, description: 'Enterprise Cloud License', qty: 1, price: 35000, taxRate: 18 },
    { id: 2, description: 'GST Setup & Data Migration', qty: 1, price: 10000, taxRate: 18 }
  ]);

  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  // Add Item
  const handleAddItem = () => {
    setItems([
      ...items,
      { id: Date.now(), description: 'Custom Software Module', qty: 1, price: 5000, taxRate: 18 }
    ]);
  };

  // Remove Item
  const handleRemoveItem = (id) => {
    if (items.length <= 1) return;
    setItems(items.filter(item => item.id !== id));
  };

  // Update Item
  const handleUpdateItem = (id, field, value) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    }));
  };

  // Calculations
  const subtotal = items.reduce((acc, item) => acc + (Number(item.price) * Number(item.qty) || 0), 0);
  const totalTax = items.reduce((acc, item) => {
    const itemSub = Number(item.price) * Number(item.qty) || 0;
    return acc + (itemSub * Number(item.taxRate)) / 100;
  }, 0);

  const cgstAmount = taxMode === 'intrastate' ? totalTax / 2 : 0;
  const sgstAmount = taxMode === 'intrastate' ? totalTax / 2 : 0;
  const igstAmount = taxMode === 'interstate' ? totalTax : 0;
  const finalDiscount = Number(discount) || 0;
  const grandTotal = Math.max(0, subtotal + totalTax - finalDiscount);

  const handlePrint = () => {
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.5 }
    });
    setTimeout(() => {
      window.print();
    }, 200);
  };

  const handleDownloadPDF = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 4000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 overflow-y-auto print:p-0 print:static">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md print:hidden"
        />

        {/* Modal Main Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          className="relative z-10 w-full max-w-5xl bg-slate-50 rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-4 sm:my-6 print:my-0 print:shadow-none print:border-none print:w-full print:max-w-none"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white print:hidden">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
                <Receipt className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base flex items-center gap-2 font-heading tracking-tight">
                  Mantisa Billing Cloud
                  <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30">
                    v2.6 Enterprise
                  </span>
                </h3>
                <p className="text-xs text-slate-400">GST Compliant Billing & Real-Time Tax Calculator</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Segmented Top Navigation Bar */}
          <div className="flex items-center justify-between px-6 pt-3 bg-white border-b border-slate-200 print:hidden">
            <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none">
              {[
                { id: 'generator', label: 'Create Invoice & Calculate', icon: Calculator },
                { id: 'analytics', label: 'Revenue Analytics', icon: BarChart3 },
                { id: 'cloud', label: 'GST & Cloud Backup', icon: Cloud }
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-t-xl border-b-2 transition-all font-heading ${
                      isActive
                        ? 'border-emerald-600 text-emerald-700 bg-emerald-50/50'
                        : 'border-transparent text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-600' : 'text-slate-400'}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {activeTab === 'generator' && (
              <button
                onClick={() => setViewSheet(!viewSheet)}
                className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl border transition-all mb-2 ${
                  viewSheet
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{viewSheet ? 'Back to Editor' : 'Preview Paper Invoice'}</span>
              </button>
            )}
          </div>

          {/* Modal Main Body */}
          <div className="p-5 sm:p-7 max-h-[78vh] overflow-y-auto print:max-h-none print:overflow-visible print:p-0">
            {activeTab === 'generator' && (
              <>
                {/* Printable Invoice Sheet View (Toggled or Print Mode) */}
                {viewSheet ? (
                  <div className="max-w-3xl mx-auto" id="printable-invoice">
                    <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl font-mono text-xs">
                      {/* Paper Document Header */}
                      <div className="flex items-start justify-between border-b-2 border-slate-900 pb-5 mb-5">
                        <div>
                          <p className="font-extrabold text-xl text-slate-900 font-sans tracking-wide">MANTISA SOLUTIONS</p>
                          <p className="text-xs text-slate-500 mt-1">GSTIN: 09AABCU9603R1ZM</p>
                          <p className="text-xs text-slate-500">Varanasi, Uttar Pradesh 221001, India</p>
                        </div>
                        <div className="text-right">
                          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 font-bold rounded-lg text-xs mb-1">
                            TAX INVOICE
                          </span>
                          <p className="text-sm font-bold text-slate-900">#INV-2026-089</p>
                          <p className="text-xs text-slate-400">Date: {new Date().toLocaleDateString('en-IN')}</p>
                        </div>
                      </div>

                      {/* Billed To Box */}
                      <div className="mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-200 flex justify-between items-center">
                        <div>
                          <p className="text-[10px] text-slate-400 uppercase font-sans font-bold tracking-wider">BILLED TO:</p>
                          <p className="font-bold text-slate-900 text-base font-sans mt-0.5">{clientName || 'Client Name'}</p>
                        </div>
                        {clientGstin && (
                          <div className="text-right">
                            <p className="text-[10px] text-slate-400 uppercase font-sans font-bold tracking-wider">CLIENT GSTIN:</p>
                            <p className="font-mono text-xs font-bold text-slate-800 mt-0.5">{clientGstin}</p>
                          </div>
                        )}
                      </div>

                      {/* Items Table */}
                      <table className="w-full text-left border-collapse mb-6">
                        <thead>
                          <tr className="border-b-2 border-slate-300 text-slate-600 text-xs uppercase font-sans font-bold tracking-wider">
                            <th className="pb-3">Description</th>
                            <th className="pb-3 text-center">Qty</th>
                            <th className="pb-3 text-right">Price</th>
                            <th className="pb-3 text-right">GST</th>
                            <th className="pb-3 text-right">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {items.map((item, idx) => {
                            const lineSub = (Number(item.price) || 0) * (Number(item.qty) || 1);
                            const lineTax = (lineSub * (Number(item.taxRate) || 0)) / 100;
                            const lineTotal = lineSub + lineTax;
                            return (
                              <tr key={idx} className="border-b border-slate-100 text-xs">
                                <td className="py-3 text-slate-900 font-sans font-medium">{item.description || 'Item'}</td>
                                <td className="py-3 text-center text-slate-600 font-bold">{item.qty}</td>
                                <td className="py-3 text-right text-slate-700">₹{Number(item.price).toLocaleString('en-IN')}</td>
                                <td className="py-3 text-right text-slate-500">{item.taxRate}%</td>
                                <td className="py-3 text-right font-bold text-slate-900">₹{lineTotal.toLocaleString('en-IN')}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>

                      {/* Tax Breakdown Box */}
                      <div className="border-t-2 border-slate-900 pt-4 flex flex-col gap-2 bg-slate-50 p-5 rounded-2xl">
                        <div className="flex justify-between text-slate-600">
                          <span>Items Subtotal:</span>
                          <span className="font-bold text-slate-900">₹{subtotal.toLocaleString('en-IN')}</span>
                        </div>

                        {taxMode === 'intrastate' ? (
                          <>
                            <div className="flex justify-between text-slate-600 text-xs">
                              <span>CGST Total:</span>
                              <span className="font-semibold text-slate-800">₹{cgstAmount.toLocaleString('en-IN')}</span>
                            </div>
                            <div className="flex justify-between text-slate-600 text-xs">
                              <span>SGST Total:</span>
                              <span className="font-semibold text-slate-800">₹{sgstAmount.toLocaleString('en-IN')}</span>
                            </div>
                          </>
                        ) : (
                          <div className="flex justify-between text-slate-600 text-xs">
                            <span>IGST Total:</span>
                            <span className="font-semibold text-slate-800">₹{igstAmount.toLocaleString('en-IN')}</span>
                          </div>
                        )}

                        <div className="flex justify-between text-slate-700 font-bold border-t border-slate-200 pt-2">
                          <span>Total GST Amount:</span>
                          <span className="text-emerald-700">₹{totalTax.toLocaleString('en-IN')}</span>
                        </div>

                        {finalDiscount > 0 && (
                          <div className="flex justify-between text-rose-600 font-bold">
                            <span>Discount Applied:</span>
                            <span>- ₹{finalDiscount.toLocaleString('en-IN')}</span>
                          </div>
                        )}

                        <div className="flex justify-between items-center font-extrabold text-slate-900 text-xl pt-3 border-t-2 border-slate-900 mt-2">
                          <span className="font-sans">GRAND TOTAL:</span>
                          <span className="text-emerald-600 font-sans">₹{grandTotal.toLocaleString('en-IN')}</span>
                        </div>
                      </div>

                      {/* Action Buttons inside View mode */}
                      <div className="flex items-center justify-end gap-3 mt-6 print:hidden">
                        <button
                          onClick={() => setViewSheet(false)}
                          className="btn-secondary py-2.5 px-5 text-xs font-bold"
                        >
                          Edit Line Items
                        </button>
                        <button
                          onClick={handlePrint}
                          className="btn-primary py-2.5 px-6 text-xs font-bold"
                        >
                          <Printer className="w-4 h-4" /> Print Invoice Now
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Editor Mode: 2-Column Oriented Layout */
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    
                    {/* Left 7 Columns: Form Controls */}
                    <div className="lg:col-span-7 flex flex-col gap-5">
                      
                      {/* Section 1: Customer Info */}
                      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col gap-3">
                        <h4 className="font-bold text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-emerald-600" /> Customer Information
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">Billed To (Client Name)</label>
                            <input
                              type="text"
                              value={clientName}
                              onChange={(e) => setClientName(e.target.value)}
                              className="w-full px-3.5 py-2 text-xs font-semibold rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 bg-slate-50/50"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">Client GSTIN Number</label>
                            <input
                              type="text"
                              value={clientGstin}
                              onChange={(e) => setClientGstin(e.target.value)}
                              className="w-full px-3.5 py-2 text-xs font-mono font-bold text-slate-800 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 bg-slate-50/50"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Section 2: Line Items Table */}
                      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col gap-4">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                          <h4 className="font-bold text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
                            <FileText className="w-3.5 h-3.5 text-emerald-600" /> Invoice Line Items ({items.length})
                          </h4>
                          <button
                            onClick={handleAddItem}
                            className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-xl transition-all"
                          >
                            <Plus className="w-3.5 h-3.5" /> Add Row
                          </button>
                        </div>

                        {/* Line Items List */}
                        <div className="flex flex-col gap-3">
                          {items.map((item, index) => (
                            <div key={item.id} className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/90 flex flex-col gap-2.5 text-xs">
                              <div className="flex items-center justify-between gap-2">
                                <span className="font-mono text-[10px] font-bold text-slate-400">#0{index + 1}</span>
                                <input
                                  type="text"
                                  placeholder="Item Description"
                                  value={item.description}
                                  onChange={(e) => handleUpdateItem(item.id, 'description', e.target.value)}
                                  className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 bg-white font-semibold text-slate-900"
                                />
                                {items.length > 1 && (
                                  <button
                                    onClick={() => handleRemoveItem(item.id)}
                                    className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                )}
                              </div>

                              <div className="grid grid-cols-3 gap-3">
                                <div>
                                  <span className="text-[10px] font-bold text-slate-500 block mb-0.5">Quantity</span>
                                  <input
                                    type="number"
                                    min="1"
                                    value={item.qty}
                                    onChange={(e) => handleUpdateItem(item.id, 'qty', Math.max(1, Number(e.target.value)))}
                                    className="w-full px-2.5 py-1 rounded-lg border border-slate-200 font-mono font-bold text-slate-800 bg-white"
                                  />
                                </div>
                                <div>
                                  <span className="text-[10px] font-bold text-slate-500 block mb-0.5">Unit Rate (₹)</span>
                                  <input
                                    type="number"
                                    min="0"
                                    value={item.price}
                                    onChange={(e) => handleUpdateItem(item.id, 'price', Math.max(0, Number(e.target.value)))}
                                    className="w-full px-2.5 py-1 rounded-lg border border-slate-200 font-mono font-bold text-slate-800 bg-white"
                                  />
                                </div>
                                <div>
                                  <span className="text-[10px] font-bold text-slate-500 block mb-0.5">GST Rate</span>
                                  <select
                                    value={item.taxRate}
                                    onChange={(e) => handleUpdateItem(item.id, 'taxRate', Number(e.target.value))}
                                    className="w-full px-2 py-1 rounded-lg border border-slate-200 font-bold text-slate-800 bg-white"
                                  >
                                    <option value={5}>5% GST</option>
                                    <option value={12}>12% GST</option>
                                    <option value={18}>18% GST</option>
                                    <option value={28}>28% GST</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Section 3: Supply Mode & Discount */}
                      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col gap-4">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-xs font-bold text-slate-800 block">GST Supply Type</span>
                            <span className="text-[11px] text-slate-400">Intrastate applies CGST+SGST, Interstate applies IGST</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() => setTaxMode('intrastate')}
                              className={`px-3 py-1.5 text-xs rounded-xl font-bold transition-all ${
                                taxMode === 'intrastate'
                                  ? 'bg-emerald-600 text-white shadow-xs'
                                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                              }`}
                            >
                              Intrastate
                            </button>
                            <button
                              type="button"
                              onClick={() => setTaxMode('interstate')}
                              className={`px-3 py-1.5 text-xs rounded-xl font-bold transition-all ${
                                taxMode === 'interstate'
                                  ? 'bg-indigo-600 text-white shadow-xs'
                                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                              }`}
                            >
                              Interstate
                            </button>
                          </div>
                        </div>

                        <div className="border-t border-slate-100 pt-3 flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-700">Special Discount (₹)</span>
                          <input
                            type="number"
                            value={discount}
                            onChange={(e) => setDiscount(Number(e.target.value))}
                            placeholder="0"
                            className="w-32 px-3 py-1.5 text-xs rounded-xl border border-slate-200 font-mono font-bold text-right bg-slate-50/50"
                          />
                        </div>
                      </div>

                    </div>

                    {/* Right 5 Columns: Financial Summary & Primary Actions */}
                    <div className="lg:col-span-5 flex flex-col gap-5 lg:sticky lg:top-0">
                      
                      {/* Summary Card */}
                      <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl border border-slate-800 flex flex-col gap-5">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                          <span className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
                            Bill Summary
                          </span>
                          <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                            AUTO-COMPUTED
                          </span>
                        </div>

                        {/* Grand Total Highlight */}
                        <div>
                          <span className="text-xs text-slate-400 font-semibold block">Total Amount Payable</span>
                          <span className="text-3xl font-extrabold text-emerald-400 font-heading mt-1 block">
                            ₹{grandTotal.toLocaleString('en-IN')}
                          </span>
                        </div>

                        {/* Breakdown List */}
                        <div className="flex flex-col gap-2.5 text-xs border-t border-slate-800 pt-4 text-slate-300">
                          <div className="flex justify-between">
                            <span className="text-slate-400">Items Subtotal:</span>
                            <span className="font-bold text-white">₹{subtotal.toLocaleString('en-IN')}</span>
                          </div>

                          {taxMode === 'intrastate' ? (
                            <>
                              <div className="flex justify-between text-slate-400">
                                <span>CGST ({items[0]?.taxRate / 2 || 9}%):</span>
                                <span>₹{cgstAmount.toLocaleString('en-IN')}</span>
                              </div>
                              <div className="flex justify-between text-slate-400">
                                <span>SGST ({items[0]?.taxRate / 2 || 9}%):</span>
                                <span>₹{sgstAmount.toLocaleString('en-IN')}</span>
                              </div>
                            </>
                          ) : (
                            <div className="flex justify-between text-slate-400">
                              <span>IGST ({items[0]?.taxRate || 18}%):</span>
                              <span>₹{igstAmount.toLocaleString('en-IN')}</span>
                            </div>
                          )}

                          <div className="flex justify-between text-slate-300 font-bold border-t border-slate-800 pt-2">
                            <span>Total GST Tax:</span>
                            <span className="text-emerald-400">₹{totalTax.toLocaleString('en-IN')}</span>
                          </div>

                          {finalDiscount > 0 && (
                            <div className="flex justify-between text-rose-400 font-semibold">
                              <span>Discount Applied:</span>
                              <span>- ₹{finalDiscount.toLocaleString('en-IN')}</span>
                            </div>
                          )}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-3 pt-2">
                          <button
                            onClick={handlePrint}
                            className="btn-primary py-3.5 text-xs justify-center font-bold tracking-wide shadow-lg shadow-emerald-500/25"
                          >
                            <Printer className="w-4 h-4" />
                            <span>Print Official Invoice</span>
                          </button>

                          <button
                            onClick={handleDownloadPDF}
                            className="btn-secondary py-3 text-xs justify-center font-bold text-slate-900 border-slate-300 hover:border-slate-900"
                          >
                            <Download className="w-4 h-4 text-emerald-600" />
                            <span>{downloaded ? 'Downloaded PDF!' : 'Download GST PDF'}</span>
                          </button>

                          <button
                            onClick={() => setViewSheet(true)}
                            className="text-xs text-slate-400 hover:text-white font-semibold text-center pt-1 transition-colors flex items-center justify-center gap-1"
                          >
                            <Eye className="w-3.5 h-3.5 text-emerald-400" />
                            <span>View Full Paper Invoice Sheet</span>
                          </button>
                        </div>
                      </div>

                    </div>

                  </div>
                )}
              </>
            )}

            {/* Financial Analytics Tab */}
            {activeTab === 'analytics' && (
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider font-mono">Monthly Revenue</p>
                    <p className="text-3xl font-extrabold text-emerald-600 mt-2 font-heading">₹14,85,000</p>
                    <p className="text-[11px] text-emerald-700 font-bold mt-1.5">↑ +24.8% vs last month</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider font-mono">Invoices Processed</p>
                    <p className="text-3xl font-extrabold text-cyan-600 mt-2 font-heading">1,420</p>
                    <p className="text-[11px] text-cyan-700 font-bold mt-1.5">100% Tax Compliant</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider font-mono">Avg Collection Speed</p>
                    <p className="text-3xl font-extrabold text-indigo-600 mt-2 font-heading">1.8 Days</p>
                    <p className="text-[11px] text-indigo-700 font-bold mt-1.5">UPI & Razorpay integrated</p>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800">
                  <h4 className="font-bold text-sm font-heading flex items-center gap-2 mb-6">
                    <BarChart3 className="w-4 h-4 text-emerald-400" /> Real-Time Revenue Volume
                  </h4>
                  <div className="h-44 flex items-end justify-between gap-3 px-2">
                    {[45, 60, 55, 80, 70, 95, 110, 130, 155].map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${val}px` }}
                          transition={{ duration: 0.8, delay: idx * 0.05 }}
                          className="w-full rounded-t-xl bg-gradient-to-t from-indigo-500 via-cyan-500 to-emerald-400"
                        />
                        <span className="text-[10px] text-slate-400 font-mono font-bold">M{idx + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Cloud & Security Tab */}
            {activeTab === 'cloud' && (
              <div className="flex flex-col gap-4 text-slate-700">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 shadow-xs">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 font-bold">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">Automated Continuous Cloud Backups</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Every transaction, invoice, and ledger entry is instantly mirrored across triple-redundant AWS Mumbai servers with end-to-end AES-256 encryption.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 shadow-xs">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">Multi-User Role Permissions & GST Filing</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Grant granular access rights to accountants, store managers, and executives with full audit logging and instant GSTR-1 & GSTR-3B JSON exports.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-white border-t border-slate-200 flex items-center justify-between print:hidden">
            <p className="text-xs text-slate-500 font-medium flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Ready for immediate enterprise deployment.</span>
            </p>

            <button onClick={onClose} className="btn-secondary text-xs !py-2.5 !px-5 font-bold">
              Close Preview
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
