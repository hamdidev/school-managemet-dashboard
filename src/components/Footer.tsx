const Footer = () => {
  return (
    <div className="min-w-[1440px] w-full text-black scrollbar">
      <div
        style={{ backgroundColor: "#000000", color: "#ffffff" }}
        className="flex justify-center"
        data-testid=""
        id=""
      >
        <div className="w-[1440px]">
          <div className="pl-[100px] pt-[80px] pb-[20px] gap-[88px] flex items-start">
            <figure className="flex gap-[10px]">
              <img
                alt=""
                loading="lazy"
                width="148"
                height="36"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="https://cdn.sanity.io/images/sq5fussn/production/ea59466c491b2e8693d240527140f84d668e1ade-7621x2341.png?auto=format&fit=max&w=256 1x, https://cdn.sanity.io/images/sq5fussn/production/ea59466c491b2e8693d240527140f84d668e1ade-7621x2341.png?auto=format&fit=max&w=384 2x"
                src="https://cdn.sanity.io/images/sq5fussn/production/ea59466c491b2e8693d240527140f84d668e1ade-7621x2341.png?auto=format&fit=max&w=384"
              />
            </figure>
            <div className="flex gap-[24px]">
              <div
                className="flex flex-col gap-[8px] w-[186px]"
                style={{ color: "#ffffff" }}
              >
                <p className="font-[700] text-[14px] leading-[18px] tt-text">
                  Company
                </p>
                <div
                  className="flex flex-col gap-[8px]"
                  style={{ opacity: 0.8 }}
                >
                  <div
                    className="flex flex-col gap-[8px]"
                    style={{ opacity: "0.8" }}
                  >
                    <a
                      className="font-[500] text-[14px] leading-[18px] tt-text"
                      target="_blank"
                      href="https://www.tiktok.com/about?lang=en"
                    >
                      <span className="inline-block hover: border-b-[2px] hover:border-b-[#CCC] border-transparent w-fit">
                        About TikTok
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
