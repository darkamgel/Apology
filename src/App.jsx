import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Icon = ({ children, className = "", size = 20 }) => (
  <span
    className={`inline-flex items-center justify-center leading-none ${className}`}
    style={{ fontSize: size }}
    aria-hidden="true"
  >
    {children}
  </span>
);

export default function AnuApologyMagicWebsite() {
  const [opened, setOpened] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const stars = useMemo(
    () =>
      Array.from({ length: 42 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 3,
        duration: 2.5 + Math.random() * 3,
        size: 2 + Math.random() * 4,
      })),
    []
  );

  const floatingHearts = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        left: `${5 + Math.random() * 90}%`,
        delay: Math.random() * 4,
        duration: 5 + Math.random() * 4,
      })),
    []
  );

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 text-slate-800">
      <div className="pointer-events-none fixed inset-0">
        {stars.map((star) => (
          <motion.span
            key={star.id}
            className="absolute rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.9)]"
            style={{ left: star.left, top: star.top, width: star.size, height: star.size }}
            animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.7, 1] }}
            transition={{ duration: star.duration, delay: star.delay, repeat: Infinity }}
          />
        ))}

        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute bottom-[-40px] text-rose-300/60"
            style={{ left: heart.left }}
            animate={{ y: [0, -900], opacity: [0, 0.8, 0], rotate: [0, 18, -12] }}
            transition={{ duration: heart.duration, delay: heart.delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon size={20}>❤</Icon>
          </motion.div>
        ))}
      </div>

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-5 py-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full rounded-[2rem] border border-white/70 bg-white/50 p-5 shadow-2xl shadow-rose-200/50 backdrop-blur-md md:p-10"
        >
          <div className="grid items-center gap-8 md:grid-cols-[1.05fr_0.95fr]">
            <section className="space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 px-4 py-2 text-sm font-medium text-rose-700 shadow-sm">
                <Icon size={16}>✨</Icon>
                A little page from my heart
              </div>

              <div className="space-y-3">
                <motion.h1
                  className="text-4xl font-black tracking-tight text-slate-900 md:text-6xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.8 }}
                >
                  Anuradha, my Chameli, I’m really sorry.
                </motion.h1>
                <motion.p
                  className="mx-auto max-w-xl text-base leading-8 text-slate-700 md:mx-0 md:text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35, duration: 0.8 }}
                >
                  I don’t know the perfect words, but I know I don’t want my ego to be bigger than my apology. If I hurt you, made you feel bad, or gave you a reason to be angry, I’m genuinely sorry.
                </motion.p>
              </div>

              <div className="flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
                <button
                  onClick={() => setOpened(true)}
                  className="group rounded-full bg-rose-500 px-6 py-3 font-semibold text-white shadow-lg shadow-rose-300 transition hover:-translate-y-0.5 hover:bg-rose-600"
                >
                  <span className="inline-flex items-center gap-2">
                    Open my heart <Icon size={18} className="transition group-hover:scale-125">❤</Icon>
                  </span>
                </button>
                <button
                  onClick={() => setShowLetter(true)}
                  className="rounded-full border border-rose-200 bg-white/70 px-6 py-3 font-semibold text-rose-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <span className="inline-flex items-center gap-2">
                    Read my letter <Icon size={18}>💌</Icon>
                  </span>
                </button>
              </div>

              <p className="text-sm text-slate-500">
                No pressure. No drama. Just me saying sorry from my heart.
              </p>
            </section>

            <section className="relative flex min-h-[360px] items-center justify-center">
              <motion.div
                className="absolute h-72 w-72 rounded-full bg-rose-300/30 blur-3xl"
                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <motion.div
                className="relative flex h-72 w-72 items-center justify-center rounded-full border border-white/80 bg-white/60 shadow-2xl shadow-pink-200 backdrop-blur-md"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  className="absolute inset-5 rounded-full border border-dashed border-rose-300"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-12 rounded-full border border-dashed border-purple-200"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                />

                <motion.div
                  className="text-center"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <Icon className="mx-auto mb-4 text-rose-500" size={76}>❤</Icon>
                  <p className="font-bold text-slate-800">For Anuradha</p>
                  <p className="mt-1 text-sm text-slate-500">from someone who really cares</p>
                </motion.div>
              </motion.div>
            </section>
          </div>
        </motion.div>

        <AnimatePresence>
          {opened && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 px-5 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
                className="relative max-w-lg rounded-[2rem] border border-white/80 bg-white p-8 text-center shadow-2xl"
              >
                <button
                  onClick={() => setOpened(false)}
                  className="absolute right-4 top-4 rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-500 hover:bg-slate-200"
                >
                  close
                </button>
                <motion.div
                  animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.08, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-rose-100 text-rose-500"
                >
                  <Icon size={42}>🌸</Icon>
                </motion.div>
                <h2 className="text-3xl font-black text-slate-900">I’m sorry, Chameli.</h2>
                <p className="mt-4 leading-8 text-slate-700">
                  I may not have handled things the right way, and I understand if you’re hurt or angry. I don’t want to argue, defend myself, or make excuses. I just want you to know that I care about you, and I’m sorry for making your heart feel heavy because of me.
                </p>
                <div className="mt-6 rounded-2xl bg-rose-50 p-4 text-sm font-medium text-rose-700">
                  “I’m not asking you to forget everything immediately. I just hope, when your heart feels ready, you can see that my apology is real.”
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showLetter && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 px-5 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                className="max-h-[88vh] max-w-2xl overflow-y-auto rounded-[2rem] border border-white/80 bg-white p-7 shadow-2xl md:p-9"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-400">A letter</p>
                    <h2 className="mt-1 text-3xl font-black text-slate-900">Dear Anuradha, my Chameli,</h2>
                  </div>
                  <button
                    onClick={() => setShowLetter(false)}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600 hover:bg-slate-200"
                  >
                    close
                  </button>
                </div>

                <div className="space-y-4 leading-8 text-slate-700">
                  <p>
                    I’m not very good at saying everything perfectly, but I still wanted to try. I know you’re angry with me, and maybe I gave you a reason to feel that way. For that, I’m really sorry.
                  </p>
                  <p>
                    I don’t want to act like I’m the victim, and I don’t want to make excuses. I just want to accept that your feelings are valid. If my words, my actions, or even my silence hurt you, I’m sorry from my heart.
                  </p>
                  <p>
                    I also want to be honest a lot of this happened because I overthought things and reacted from fear instead of calmness. That was my mistake. I’m working on it, and I’m sorry if my overthinking hurt you or made things harder between us.
                  </p>
                  <p>
                    You matter to me, Chameli. That’s why I made this. Not to force you to forgive me, not to make you feel bad, but because a normal message did not feel enough for what I wanted to say.
                  </p>
                  <p>
                    I miss the peace between us. I miss being okay with you. And I hope someday, when you feel ready, we can talk calmly and start fresh — even if it takes time.
                  </p>
                  <p className="font-semibold text-rose-700">I’m sorry, Anuradha. Truly.</p>
                </div>

                <div className="mt-7 flex items-center gap-2 rounded-2xl bg-purple-50 p-4 text-sm text-purple-700">
                  <Icon size={18}>⭐</Icon>
                  Take your time. I’ll respect your feelings either way.
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
