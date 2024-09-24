// 语言对象，包含英文和中文内容
const translations = {
  en: {
    title:	"Website Framework",
    description:	"Personal website",
    xiangceweizhi:	"Highlights",
    kapianname1:	"Company News",
    kapianname2:	"Industry News Today",
    cebianlanname:	"Contact Details",

  },
  zh: {
    title:	"网站框架",
    description:	"个人网站",
    xiangceweizhi:	"精彩瞬间",
    kapianname1:	"企业动态",
    kapianname2:	"行业今日新闻",
    cebianlanname:	"联系方式",

  }
};

// 语言切换函数
function switchLanguage(language) {
  // 查找页面中所有具有 data-translate 属性的元素
  document.querySelectorAll("[data-translate]").forEach(element => {
    const key = element.getAttribute("data-translate");  // 获取 data-translate 属性的值
    element.textContent = translations[language][key];  // 根据语言设置相应的文本
  });
}

// 绑定点击事件：切换到英文
document.getElementById("lang-en").addEventListener("click", (event) => {
  event.preventDefault();  // 阻止链接默认跳转行为
  switchLanguage("en");
});

// 绑定点击事件：切换到中文
document.getElementById("lang-zh").addEventListener("click", (event) => {
  event.preventDefault();  // 阻止链接默认跳转行为
  switchLanguage("zh");
});

// 页面加载时默认语言设置为中文
switchLanguage("zh");
