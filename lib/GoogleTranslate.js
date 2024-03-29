import { useEffect } from "react";
import Cookies from "universal-cookie";

/*!***************************************************
 * GoogleTranslate.js v1.0.5
 * author: Guzhva Andrey, Vitalii P.
 *****************************************************/

export default function GoogleTranslate ({originalLang = 'ru', langFirstVisit = 'uk', domain=''}) {

	const config = {
		/* Original language */
		lang: originalLang,

		/* The language we translate into on the first visit*/
		/* Язык, на который переводим при первом посещении */
		langFirstVisit: langFirstVisit,

		/* Если скрипт не работает или работает неправильно, раскомментируйте и укажите основной домен в свойстве domain */
		/* If the script does not work or does not work correctly, uncomment and specify the main domain in the domain property */
		domain: domain
	};

	const cookies = new Cookies();
	
	/* Connecting the google translate widget */
	useEffect(()=>{
		const script = document.createElement("script");
		script.src = `//translate.google.com/translate_a/element.js?cb=scriptLoaded`;
		script.async = true;
		const element = document.getElementsByTagName("head")[0];

		// Instant function in window variable visibility arena
		window.scriptLoaded = function() {
			thisScriptLoaded()
		}
		element.appendChild(script);

		return ()=>
			element.removeChild(script)
		
	})

	function thisScriptLoaded() {

		if (config.langFirstVisit && !cookies.get("googtrans")) {
			/* Если установлен язык перевода для первого посещения и куки не назначены */
			/* If the translation language is installed for the first visit and cookies are not assigned */
			TranslateCookieHandler("/auto/" + config.langFirstVisit);
		}

		let code = TranslateGetCode();

		TranslateHtmlHandler(code);

		if (code == config.lang) {
			/* Если язык по умолчанию, совпадает с языком на который переводим, то очищаем куки */
			/* If the default language is the same as the language we are translating into, then we clear the cookies */
			TranslateCookieHandler(null, config.domain);
		}

		/* Инициализируем виджет с языком по умолчанию */
		/* Initialize the widget with the default language */
		new window.google.translate.TranslateElement({
			pageLanguage: config.lang
		});

		/* Вешаем событие  клик на флаги */
		/* Assigning a handler to the flags */
		TranslateEventHandler("click", "[data-google-lang]", function (e) {
			console.log('bb')
			TranslateCookieHandler(
				"/" + config.lang + "/" + e.getAttribute("data-google-lang"),
				config.domain
			);
			/* Перезагружаем страницу */
			/* Reloading the page */
			window.location.reload();
		});
	}

	function TranslateGetCode() {
		/* Если куки нет, то передаем дефолтный язык */
		/* If there are no cookies, then we pass the default language */
		let lang =
			cookies.get("googtrans") != undefined && cookies.get("googtrans") != "null"
				? cookies.get("googtrans")
				: config.lang;
		return lang.match(/(?!^\/)[^\/]*$/gm)[0];
	}

	function TranslateCookieHandler(val, domain) {
		/* Записываем куки /язык_который_переводим/язык_на_который_переводим */
		/* Writing down cookies /language_for_translation/the_language_we_are_translating_into */
		cookies.set("googtrans", val);
		cookies.set("googtrans", val, {
			domain: "." + document.domain,
		});

		if (domain == "undefined") return;
		/* записываем куки для домена, если он назначен в конфиге */
		/* Writing down cookies for the domain, if it is assigned in the config */
		cookies.set("googtrans", val, {
			domain: domain,
		});

		cookies.set("googtrans", val, {
			domain: "." + domain,
		});
	}

	function TranslateEventHandler(event, selector, handler) {
		document.addEventListener(event, function (e) {
			let el = e.target.closest(selector);
			if (el) handler(el);
		});
	}

	function TranslateHtmlHandler(code) {
		/* Получаем язык на который переводим и производим необходимые манипуляции с DOM */
		/* We get the language to which we translate and produce the necessary manipulations with DOM */
		if (document.querySelector('[data-google-lang="' + code + '"]') !== null) {
			document
				.querySelector('[data-google-lang="' + code + '"]')
				.classList.add("language__img_active");
		}
	}

	return(
		<div className="language">
			<img src="/image/lang__ru.png" alt="ru" data-google-lang="ru" className="language__img" />
			<img src="/image/lang__uk.png" alt="uk" data-google-lang="uk" className="language__img" />
			<img src="/image/lang__en.png" alt="en" data-google-lang="en" className="language__img" />
        </div>
	)
}