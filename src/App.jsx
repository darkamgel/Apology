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

const loveNotes = [
  "I’m sorry",
  "You matter",
  "My Chameli 🌸",
  "You’re special",
  "My apology is real",
  "A little piece of my heart",
  "I miss your smile",
  "Take your time",
];

export default function App() {
  const [showLetter, setShowLetter] = useState(false);
  const [showHeartNote, setShowHeartNote] = useState(false);
  const [showFinalNote, setShowFinalNote] = useState(false);

  const sparkles = useMemo(
    () =>
      Array.from({ length: 75 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 4,
        duration: 2 + Math.random() * 4,
        size: 2 + Math.random() * 4,
      })),
    []
  );

  const floatingHearts = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 7,
        duration: 6 + Math.random() * 6,
        size: 14 + Math.random() * 20,
      })),
    []
  );

  const bubbles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        duration: 5 + Math.random() * 8,
        size: 40 + Math.random() * 90,
      })),
    []
  );

  const noteCloud = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        text: loveNotes[i % loveNotes.length],
        left: `${5 + Math.random() * 80}%`,
        top: `${8 + Math.random() * 75}%`,
        delay: Math.random() * 5,
        duration: 7 + Math.random() * 7,
      })),
    []
  );

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-fuchsia-100 text-slate-800">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          className="absolute left-[-130px] top-[-130px] h-[360px] w-[360px] rounded-full bg-rose-300/30 blur-3xl"
          animate={{ scale: [1, 1.25, 1], x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-140px] right-[-140px] h-[390px] w-[390px] rounded-full bg-pink-300/30 blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, -35, 0], y: [0, -25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[38%] top-[18%] h-[280px] w-[280px] rounded-full bg-purple-200/35 blur-3xl"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 25, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        {bubbles.map((bubble) => (
          <motion.span
            key={bubble.id}
            className="absolute rounded-full border border-white/40 bg-white/10 shadow-inner"
            style={{
              left: bubble.left,
              top: bubble.top,
              width: bubble.size,
              height: bubble.size,
            }}
            animate={{
              y: [0, -35, 0],
              x: [0, 20, -15, 0],
              opacity: [0.15, 0.45, 0.15],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {sparkles.map((s) => (
          <motion.span
            key={s.id}
            className="absolute rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.95)]"
            style={{ left: s.left, top: s.top, width: s.size, height: s.size }}
            animate={{ opacity: [0.1, 1, 0.2], scale: [1, 1.9, 1] }}
            transition={{ duration: s.duration, delay: s.delay, repeat: Infinity }}
          />
        ))}

        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute bottom-[-60px] text-rose-300/70"
            style={{ left: heart.left }}
            animate={{
              y: [0, -1050],
              x: [0, 25, -20, 15, 0],
              opacity: [0, 0.9, 0.75, 0],
              rotate: [0, 15, -15, 10, 0],
              scale: [0.75, 1.15, 1],
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon size={heart.size}>❤</Icon>
          </motion.div>
        ))}

        {noteCloud.map((note) => (
          <motion.div
            key={note.id}
            className="absolute rounded-full border border-white/60 bg-white/35 px-4 py-2 text-xs font-semibold text-rose-500 shadow-sm backdrop-blur-md"
            style={{ left: note.left, top: note.top }}
            animate={{
              y: [0, -25, 0],
              x: [0, 12, -12, 0],
              opacity: [0, 0.7, 0.7, 0],
              scale: [0.92, 1, 0.98],
            }}
            transition={{
              duration: note.duration,
              delay: note.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {note.text}
          </motion.div>
        ))}
      </div>

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-5 py-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="w-full rounded-[2.2rem] border border-white/70 bg-white/55 p-5 shadow-2xl shadow-rose-200/60 backdrop-blur-md md:p-10"
        >
          <div className="grid items-center gap-10 md:grid-cols-[1.08fr_0.92fr]">
            <section className="space-y-6 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.7 }}
                className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-sm font-medium text-rose-700 shadow-sm"
              >
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.25, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✨
                </motion.span>
                A little page from my heart
              </motion.div>

              <div className="space-y-4">
                <motion.h1
                  className="text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl"
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.85 }}
                >
                  Anuradha, my Chameli,
                  <br />
                  <motion.span
                    className="inline-block bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    I’m really sorry.
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="mx-auto max-w-xl text-base leading-8 text-slate-700 md:mx-0 md:text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45, duration: 0.9 }}
                >
                  I know a simple sorry may not fix everything, but I still wanted
                  to say it with honesty. You are special to me, Chameli, and if I
                  hurt you, made you upset, or made your heart feel heavy because
                  of me, I am truly sorry.
                </motion.p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setShowHeartNote(true)}
                  className="group rounded-full bg-rose-500 px-6 py-3 font-semibold text-white shadow-lg shadow-rose-300 transition hover:bg-rose-600"
                >
                  <span className="inline-flex items-center gap-2">
                    Open my heart
                    <motion.span
                      animate={{ scale: [1, 1.35, 1] }}
                      transition={{ duration: 1.1, repeat: Infinity }}
                    >
                      ❤
                    </motion.span>
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setShowLetter(true)}
                  className="rounded-full border border-rose-200 bg-white/80 px-6 py-3 font-semibold text-rose-700 shadow-sm transition hover:bg-white"
                >
                  <span className="inline-flex items-center gap-2">
                    Read my letter <Icon size={18}>💌</Icon>
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setShowFinalNote(true)}
                  className="rounded-full border border-fuchsia-200 bg-fuchsia-50/80 px-6 py-3 font-semibold text-fuchsia-700 shadow-sm transition hover:bg-white"
                >
                  <span className="inline-flex items-center gap-2">
                    One soft promise <Icon size={18}>🌙</Icon>
                  </span>
                </motion.button>
              </div>

              <motion.p
                className="text-sm text-slate-500"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                No pressure. No drama. Just a sincere apology wrapped with care.
              </motion.p>

              <div className="grid gap-3 pt-3 sm:grid-cols-3">
                {[
                  {
                    icon: "🤍",
                    title: "No excuses",
                    text: "I’m not here to defend myself. I just want to apologize honestly.",
                  },
                  {
                    icon: "🌸",
                    title: "Your feelings matter",
                    text: "I know your hurt and anger are real, and I respect that.",
                  },
                  {
                    icon: "🕊️",
                    title: "Take your time",
                    text: "You don’t have to reply immediately. I’ll respect your space.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -6, scale: 1.03 }}
                    transition={{ delay: 0.55 + index * 0.13, duration: 0.6 }}
                    className="rounded-2xl border border-white/70 bg-white/75 p-4 text-left shadow-sm"
                  >
                    <div className="mb-2 text-2xl">{item.icon}</div>
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="relative flex min-h-[450px] items-center justify-center">
              <motion.div
                className="absolute h-96 w-96 rounded-full bg-rose-300/30 blur-3xl"
                animate={{ scale: [1, 1.15, 1], opacity: [0.45, 0.9, 0.45] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <motion.div
                className="relative flex h-[390px] w-[330px] flex-col items-center justify-center rounded-[2.2rem] border border-white/80 bg-white/65 px-6 text-center shadow-2xl shadow-pink-200 backdrop-blur-md"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  className="absolute inset-4 rounded-[1.8rem] border border-dashed border-rose-300/70"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-10 rounded-[1.4rem] border border-dashed border-pink-200/80"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                />

                <motion.div
                  className="absolute -top-5 left-8 rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-rose-500 shadow-md"
                  animate={{ y: [0, -10, 0], rotate: [-4, 4, -4] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  forgive me? 💌
                </motion.div>
                <motion.div
                  className="absolute -right-4 bottom-16 rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-pink-500 shadow-md"
                  animate={{ y: [0, 10, 0], rotate: [4, -4, 4] }}
                  transition={{ duration: 3.4, repeat: Infinity }}
                >
                  chameli 🌸
                </motion.div>

                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                  className="relative z-10"
                >
                  <motion.div
                    className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full bg-rose-100 shadow-inner"
                    animate={{ boxShadow: ["0 0 0px rgba(244,63,94,0.25)", "0 0 38px rgba(244,63,94,0.45)", "0 0 0px rgba(244,63,94,0.25)"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <motion.span
                      className="text-6xl text-rose-500"
                      animate={{ scale: [1, 1.22, 1], rotate: [0, 4, -4, 0] }}
                      transition={{ duration: 1.4, repeat: Infinity }}
                    >
                      ❤
                    </motion.span>
                  </motion.div>

                  <h2 className="text-2xl font-black text-slate-900">For Anuradha</h2>
                  <p className="mt-2 text-sm text-slate-500">from someone who really cares</p>

                  <motion.div
                    className="mt-6 rounded-2xl bg-rose-50/90 p-4 text-sm leading-7 text-rose-700 shadow-sm"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    “You became special to me in a way I did not expect. I’m not asking you to forget everything immediately — I just hope my apology reaches your heart someday.”
                  </motion.div>
                </motion.div>
              </motion.div>
            </section>
          </div>
        </motion.div>
      </main>

      <AnimatePresence>
        {showHeartNote && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 px-5 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.82, opacity: 0, y: 35 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="relative max-w-lg overflow-hidden rounded-[2rem] border border-white/80 bg-white p-8 text-center shadow-2xl"
            >
              <motion.div
                className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-rose-200/40 blur-2xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <button
                onClick={() => setShowHeartNote(false)}
                className="absolute right-4 top-4 rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-500 hover:bg-slate-200"
              >
                close
              </button>

              <motion.div
                animate={{ rotate: [0, 7, -7, 0], scale: [1, 1.08, 1] }}
                transition={{ duration: 1.7, repeat: Infinity }}
                className="relative z-10 mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-rose-100 text-rose-500"
              >
                <Icon size={42}>🌸</Icon>
              </motion.div>

              <h2 className="relative z-10 text-3xl font-black text-slate-900">I’m sorry, Chameli.</h2>
              <p className="relative z-10 mt-4 leading-8 text-slate-700">
                I may not have handled things the right way, and I understand if
                you’re hurt or angry. I don’t want to argue, defend myself, or
                make excuses. I just want you to know that I care about you, and
                I’m sorry for making your heart feel heavy because of me.
              </p>
              <div className="relative z-10 mt-6 rounded-2xl bg-rose-50 p-4 text-sm font-medium text-rose-700">
                You don’t have to forgive me right away. I just wanted my apology
                to reach you in the most sincere and softest way I could.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showFinalNote && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 px-5 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, rotate: -2 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.9, opacity: 0, rotate: 2 }}
              className="relative max-w-md rounded-[2rem] border border-white/80 bg-white p-8 text-center shadow-2xl"
            >
              <button
                onClick={() => setShowFinalNote(false)}
                className="absolute right-4 top-4 rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-500 hover:bg-slate-200"
              >
                close
              </button>
              <motion.div
                className="mx-auto mb-5 text-6xl"
                animate={{ y: [0, -8, 0], rotate: [0, 6, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🕊️
              </motion.div>
              <h2 className="text-3xl font-black text-slate-900">One soft promise</h2>
              <p className="mt-4 leading-8 text-slate-700">
                I’ll try to be calmer, kinder, and more careful with my emotions.
                My overthinking is not your burden, and I’m sorry for letting it
                affect the peace between us. If I ever get another chance to talk
                to you, I want to bring warmth, not worry.
              </p>
              <div className="mt-6 rounded-2xl bg-fuchsia-50 p-4 text-sm font-medium text-fuchsia-700">
                You deserve peace, respect, honesty, and a heart that treats you gently — always.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showLetter && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 px-5 py-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 35, scale: 0.97 }}
              className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/80 bg-white p-7 shadow-2xl md:p-10"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-400">A letter from my heart</p>
                  <h2 className="mt-2 text-3xl font-black text-slate-900">Dear Anuradha, my Chameli,</h2>
                </div>
                <button
                  onClick={() => setShowLetter(false)}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600 hover:bg-slate-200"
                >
                  close
                </button>
              </div>

              <div className="space-y-5 text-[15.5px] leading-8 text-slate-700 md:text-base">
                <p>
                  I’m not very good at saying everything perfectly, but I still wanted to try.
                  I know you are angry with me, and maybe I gave you a reason to feel that way.
                  For that, I am really sorry.
                </p>
                <p>
                  I donot want to act like I’m the victim, and I donot want to make excuses.
                  I just want to accept that your feelings are valid. If my words, my actions,
                  or even my silence hurt you, I am sorry from my heart.
                </p>
                <p>
                  I also want to be honest a lot of this happened because I overthought things
                  and reacted from fear instead of calmness. That was my mistake. I am working on it,
                  and I am sorry if my overthinking hurt you or made things harder between us.
                </p>
                <p>
                  You matter to me, Chameli. More than I probably knew how to show properly. That is why I made this.
                  Not to force you to forgive me, not to make you feel bad, but because a normal message
                  did not feel enough for what I wanted to say.
                </p>
                <p>
                  Sometimes the heart carries things it doesnot know how to say properly, and maybe
                  that’s what happened with me. I let my emotions and thoughts become messy, and instead
                  of bringing peace, I ended up creating distance. I regret that.
                </p>
                <p>
                  I miss the peace between us. I miss being okay with you. I miss the little softness your presence
                  brought into my day. And I hope someday, when you feel ready, we can talk calmly and start
                  fresh — even if it takes time.
                </p>
                <p>
                  I’m not asking you to immediately forget what happened. I only want you to know that
                  my apology is real, my regret is real, and the care I have for you is real too. You are
                  not just a name in my phone; you became someone my heart honestly cares about.
                </p>
                <p>
                  If you need time, I understand. If you need space, I respect that. I just didn’t want
                  to stay silent without telling you how sorry I truly am, and how gently I still think of you.
                </p>
                <p className="font-semibold text-rose-700">I’m sorry, Anuradha(jhalli). Truly — from my heart.</p>
              </div>

              <div className="mt-8 rounded-2xl bg-gradient-to-r from-rose-50 to-pink-50 p-4 text-sm text-rose-700 shadow-sm">
                <span className="inline-flex items-center gap-2 font-medium">
                  <Icon size={18}>⭐</Icon>
                  Take your time. I will respect your feelings either way.
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
