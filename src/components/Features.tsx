export default function Features() {
  const items = [
    {
      icon: "pencil-outline",
      title: "Design",
      content:
        "Our BAFE-certified designers create customized fire alarm systems that meet regulations and your building's unique needs.",
    },
    {
      icon: "hammer-outline",
      title: "Installation",
      content:
        "Our expert engineers install fire alarm systems to top safety, compliance, and reliability standards.",
    },
    {
      icon: "checkmark-circle-outline",
      title: "Commission",
      content:
        "We conduct thorough commissioning and testing to ensure full compliance and immediate protection.",
    },
    {
      icon: "headset-outline",
      title: "Service",
      content:
        "We offer personalized service with detailed attention and unwavering quality for your fire alarm needs.",
    },
    {
      icon: "rocket-outline",
      title: "Delivery",
      content:
        "Projects are delivered on time, to spec, with support throughout every stage.",
    },
    {
      icon: "shield-outline",
      title: "Aftercare",
      content:
        "Our dedicated aftercare resolves issues promptly, maintaining system integrity and your satisfaction.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-[70rem] h-[70vh]  mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-center">
        {items.map((i) => (
          <div key={i.title} className="flex flex-col items-center text-center">
            <ion-icon
              name={i.icon}
              style={{
                color: "white",
                height: "3rem",
                width: "3rem",
                backgroundColor: "#555",
                marginBottom: "0.75rem",
                padding: "0.75rem",
                borderRadius: "50%",
                border: "2px solid #e53935",
              }}
            ></ion-icon>
            <p className="text-xl text-gray-800 font-extrabold mb-1">
              {i.title}
            </p>
            <p className="text-sm font-light leading-snug text-center">
              {i.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
