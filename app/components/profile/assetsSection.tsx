"use client";

import { Trash2 } from "lucide-react";
import Image from "next/image";

export default function AssetsSection({
  coupons,
  tickets,
  history,
  showCoupons,
  setShowCoupons,
  showTickets,
  setShowTickets,
  showHistory,
  setShowHistory,
  deleteTicketId,
  setDeleteTicketId,
  deleteTicket,
  confirmDeleteAll,
  setConfirmDeleteAll,
  deleteAllHistory,
  historyMessage,
}: any) {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4">
        <button
          className="mb-6 flex w-full cursor-pointer items-center justify-between rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-4 sm:p-6 text-lg sm:text-2xl font-bold text-[var(--text-main2)] shadow-xl transition hover:bg-[var(--text-slate-hover)]"
          data-cy="profile-coupons-toggle"
          onClick={() => {
            setShowCoupons((v: boolean) => !v);
            setShowTickets(false);
            setShowHistory(false);
          }}
        >
          <span>Kuponjaim</span>

          <span className={`text-xl transition ${showCoupons ? "rotate-180" : ""}`}>▼</span>
        </button>

        <div
          className={`transition-all duration-500 ease-in-out ${showCoupons
            ? "mt-4 mb-4 max-h-[calc(100vh-200px)] overflow-y-auto opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
            }`}
          data-cy="profile-coupons-section"
        >
          <div>
            {coupons.length === 0 && (
              <div className="mb-6 text-[var(--text-main)]/60">
                Még nincs kuponod. Szerezz pontokat jegyvásárlással!
              </div>
            )}

            <div className="grid gap-6 sm:grid-cols-2">
              {coupons.map((coupon: any) => (
                <div
                  className={`relative overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-5 shadow-xl ${coupon.used ? "opacity-40" : ""
                    }`}
                  data-coupon-id={coupon.id}
                  data-cy="coupon-card"
                  key={coupon.id}
                >
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
                    <Image
                      alt="discount"
                      className="h-24 w-24 object-contain"
                      height={112}
                      src={coupon.discounts.image}
                      width={112}
                    />
                    <div className="flex-1">
                      <div className="text-xl font-bold text-[var(--text-main)]">
                        {coupon.discounts.name}
                      </div>

                      <div className="mt-1 text-sm text-[var(--text-main)]/60">
                        {coupon.discounts.description}
                      </div>

                      <div className="absolute top-3 right-3 rounded bg-cyan-500 px-2 py-1 text-xs font-bold text-black">
                        -{coupon.discounts.percent}%
                      </div>

                      {coupon.used && (
                        <div className="mt-2 font-semibold text-red-400">Felhasználva</div>
                      )}
                    </div>

                    {!coupon.used && (
                      <Image
                        alt="qr"
                        className="w-24 sm:w-28 rounded-lg bg-white p-2"
                        data-coupon-id={coupon.id}
                        data-cy="coupon-qr"
                        height={112}
                        src={`/api/email/qr/${coupon.qr_token}`}
                        width={112}
                      />
                    )}
                  </div>

                  {coupon.used && (
                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-red-500/70">
                      FELHASZNÁLVA
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4">
        <button
          className="mb-6 flex w-full cursor-pointer items-center justify-between rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-4 sm:p-6 text-lg sm:text-2xl text-left font-bold text-[var(--text-main2)] shadow-xl transition hover:bg-[var(--text-slate-hover)]"
          data-cy="profile-tickets-toggle"
          onClick={() => {
            setShowTickets((v: boolean) => !v);
            setShowCoupons(false);
            setShowHistory(false);
          }}
        >
          <span>Jegyeim</span>
          <span className={`text-xl transition ${showTickets ? "rotate-180" : ""}`}>▼</span>
        </button>

        <div
          className={`transition-all duration-500 ease-in-out ${showTickets
            ? "mt-4 mb-4 max-h-[calc(100vh-200px)] overflow-y-auto opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
            }`}
          data-cy="profile-tickets-section"
        >
          <div className="overflow-hidden">
            {tickets.length === 0 && (
              <div className="mb-6 text-[var(--text-main)]/60">Még nem vásároltál jegyet.</div>
            )}

            <div className="flex flex-col gap-6">
              {tickets.map((ticket: any) => (
                <div
                  className="rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-4 sm:p-6 shadow-2xl"
                  data-cy="active-ticket-card"
                  data-ticket-id={ticket.id}
                  key={ticket.id}
                >
                  <div className="grid grid-cols-[1fr_auto] gap-4 items-center">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[var(--text-main2)]">
                        {ticket.screenings.movies.title}
                      </h3>

                      <div className="mt-1 text-sm text-[var(--text-main)]/70">
                        {new Date(ticket.screenings.start).toLocaleString()}
                      </div>

                      <div className="mt-2 space-y-0.5 text-sm">
                        <div>Terem: {ticket.screenings.halls.name}</div>
                        <div>Típus: {ticket.screenings.screening_types.type}</div>
                        <div>Szék: Sor {ticket.chairs.row} Szék {ticket.chairs.column}</div>
                        <div>Jegy típusa: {ticket.ticket_types.type}</div>
                      </div>

                      <div className="mt-3 text-lg font-semibold text-[var(--text-main2)]">
                        {(ticket.price / 100).toFixed(2)} €
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <img
                        alt="qr"
                        className="w-20 sm:w-24 md:w-28 rounded-lg bg-white p-2"
                        src={`/api/email/qr/${ticket.qr_token}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-10 sm:pb-16">
        <button
          className="mb-2 flex w-full cursor-pointer items-center justify-between rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-4 sm:p-6 text-lg sm:text-2xl text-left font-bold text-[var(--text-main2)] shadow-xl transition hover:bg-[var(--text-slate-hover)]"
          data-cy="profile-history-toggle"
          onClick={() => {
            setShowHistory((v: boolean) => !v);
            setShowCoupons(false);
            setShowTickets(false);
          }}
        >
          <span>Vásárlási előzmények</span>
          <span
            className={`text-xl transition-transform duration-300 ${showHistory ? "rotate-180" : ""
              }`}
          >
            ▼
          </span>
        </button>

        <div
          className={`transition-all duration-500 ease-in-out ${showHistory
            ? "mt-4 max-h-[60vh] overflow-y-auto opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
            }`}
          data-cy="profile-history-section"
        >
          {history.length > 0 && (
            <div className="mb-4 flex justify-end">
              <button
                className="cursor-pointer rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-[var(--text-light)] transition hover:bg-red-500"
                data-cy="history-delete-all"
                onClick={() => setConfirmDeleteAll(true)}
              >
                Összes előzmény törlése
              </button>
            </div>
          )}

          {history.length === 0 && (
            <div className="mb-6 text-[var(--text-main)]/60">Még nincs lezárt vetítésed.</div>
          )}

          <div className="grid gap-4">
            {history.map((ticket: any) => (
              <div
                className="rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] p-4 sm:p-5 transition hover:bg-[var(--text-slate-hover)]"
                data-cy="history-ticket-card"
                data-ticket-id={ticket.id}
                key={ticket.id}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <div className="text-base sm:text-lg font-semibold text-[var(--text-main)]">
                      {ticket.screenings.movies.title}
                    </div>

                    <div className="mt-1 text-sm text-[var(--text-main)]/60">
                      {new Date(ticket.screenings.start).toLocaleString()}
                    </div>

                    <div className="text-sm text-[var(--text-main)]/60">
                      Terem: {ticket.screenings.halls.name}
                    </div>

                    <div className="text-sm text-[var(--text-main)]/60">
                      Jegy: {ticket.ticket_types.type}
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                    <div className="text-base sm:text-lg font-bold text-green-400">
                      {(ticket.price / 100).toFixed(2)} €
                    </div>

                    <button
                      className="flex cursor-pointer items-center justify-center rounded-lg bg-red-500/20 p-2 text-red-400 transition hover:bg-red-500/40 hover:text-red-300"
                      data-cy="history-delete-ticket"
                      onClick={() => setDeleteTicketId(ticket.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 h-5 text-center text-sm">
            {historyMessage && (
              <span
                className={historyMessage.includes("Hiba") ? "text-red-400" : "text-green-400"}
                data-cy="history-message"
              >
                {historyMessage}
              </span>
            )}
          </div>

          {deleteTicketId && (
            <div
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70"
              data-cy="history-delete-modal"
            >
              <div className="w-[90%] max-w-[380px] rounded-2xl border border-[var(--border-color)] bg-black p-6 shadow-2xl">
                <h2 className="mb-4 text-xl font-bold text-[var(--text-main)]">Jegy törlése</h2>

                <p className="mb-6 text-[var(--text-main)]/70">
                  Biztos törölni szeretnéd ezt a jegyet a vásárlási előzményekből?
                </p>

                <div className="flex justify-end gap-3">
                  <button
                    className="rounded-lg bg-white/10 px-4 py-2 transition hover:bg-white/20"
                    data-cy="history-delete-cancel"
                    onClick={() => setDeleteTicketId(null)}
                  >
                    Mégse
                  </button>

                  <button
                    className="rounded-lg bg-red-600 px-4 py-2 text-[var(--text-main)] transition hover:bg-red-500"
                    data-cy="history-delete-confirm"
                    onClick={() => deleteTicket(deleteTicketId)}
                  >
                    Törlés
                  </button>
                </div>
              </div>
            </div>
          )}

          {confirmDeleteAll && (
            <div
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70"
              data-cy="history-delete-all-modal"
            >
              <div className="w-[90%] max-w-[380px] rounded-2xl border border-[var(--border-color)] bg-black p-6 shadow-2xl">
                <h2 className="mb-4 text-xl font-bold text-[var(--text-main)]">
                  Összes előzmény törlése
                </h2>

                <p className="mb-6 text-[var(--text-main)]/70">
                  Biztos törölni szeretnéd az összes vásárlási előzményt?
                </p>

                <div className="flex justify-end gap-3">
                  <button
                    className="rounded-lg bg-white/10 px-4 py-2 transition hover:bg-white/20"
                    data-cy="history-delete-all-cancel"
                    onClick={() => setConfirmDeleteAll(false)}
                  >
                    Mégse
                  </button>

                  <button
                    className="rounded-lg bg-red-600 px-4 py-2 text-[var(--text-main)] transition hover:bg-red-500"
                    data-cy="history-delete-all-confirm"
                    onClick={deleteAllHistory}
                  >
                    Törlés
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}