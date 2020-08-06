SELECT pg_terminate_backend(pg_stat_activity.pid)
FROM pg_stat_activity
WHERE usename = 'freecodecamp';

--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3 (Debian 12.3-1.pgdg90+1)
-- Dumped by pg_dump version 12.3 (Debian 12.3-1.pgdg90+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE IF EXISTS mario_database;
--
-- Name: mario_database; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE mario_database WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE mario_database OWNER TO freecodecamp;

\connect mario_database

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: actions; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.actions (
    action_id integer NOT NULL,
    action character varying(20) NOT NULL
);


ALTER TABLE public.actions OWNER TO freecodecamp;

--
-- Name: actions_action_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.actions_action_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.actions_action_id_seq OWNER TO freecodecamp;

--
-- Name: actions_action_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.actions_action_id_seq OWNED BY public.actions.action_id;


--
-- Name: character_actions; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.character_actions (
    character_id integer NOT NULL,
    action_id integer NOT NULL
);


ALTER TABLE public.character_actions OWNER TO freecodecamp;

--
-- Name: characters; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.characters (
    character_id integer NOT NULL,
    name character varying(30) NOT NULL,
    homeland character varying(60),
    favorite_color character varying(30)
);


ALTER TABLE public.characters OWNER TO freecodecamp;

--
-- Name: characters_character_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.characters_character_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.characters_character_id_seq OWNER TO freecodecamp;

--
-- Name: characters_character_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.characters_character_id_seq OWNED BY public.characters.character_id;


--
-- Name: more_info; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.more_info (
    more_info_id integer NOT NULL,
    birthday date,
    height_in_cm integer,
    weight_in_kg numeric(4,1),
    character_id integer NOT NULL
);


ALTER TABLE public.more_info OWNER TO freecodecamp;

--
-- Name: more_info_more_info_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.more_info_more_info_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.more_info_more_info_id_seq OWNER TO freecodecamp;

--
-- Name: more_info_more_info_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.more_info_more_info_id_seq OWNED BY public.more_info.more_info_id;


--
-- Name: sounds; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.sounds (
    sound_id integer NOT NULL,
    filename character varying(40) NOT NULL,
    character_id integer NOT NULL
);


ALTER TABLE public.sounds OWNER TO freecodecamp;

--
-- Name: sounds_sound_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.sounds_sound_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sounds_sound_id_seq OWNER TO freecodecamp;

--
-- Name: sounds_sound_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.sounds_sound_id_seq OWNED BY public.sounds.sound_id;


--
-- Name: actions action_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.actions ALTER COLUMN action_id SET DEFAULT nextval('public.actions_action_id_seq'::regclass);


--
-- Name: characters character_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.characters ALTER COLUMN character_id SET DEFAULT nextval('public.characters_character_id_seq'::regclass);


--
-- Name: more_info more_info_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.more_info ALTER COLUMN more_info_id SET DEFAULT nextval('public.more_info_more_info_id_seq'::regclass);


--
-- Name: sounds sound_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.sounds ALTER COLUMN sound_id SET DEFAULT nextval('public.sounds_sound_id_seq'::regclass);


--
-- Data for Name: actions; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.actions VALUES (1, 'run');
INSERT INTO public.actions VALUES (2, 'jump');
INSERT INTO public.actions VALUES (3, 'duck');


--
-- Data for Name: character_actions; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.character_actions VALUES (7, 1);
INSERT INTO public.character_actions VALUES (7, 2);
INSERT INTO public.character_actions VALUES (7, 3);
INSERT INTO public.character_actions VALUES (6, 1);
INSERT INTO public.character_actions VALUES (6, 2);
INSERT INTO public.character_actions VALUES (6, 3);
INSERT INTO public.character_actions VALUES (5, 1);
INSERT INTO public.character_actions VALUES (5, 2);
INSERT INTO public.character_actions VALUES (5, 3);
INSERT INTO public.character_actions VALUES (4, 1);
INSERT INTO public.character_actions VALUES (4, 2);
INSERT INTO public.character_actions VALUES (4, 3);
INSERT INTO public.character_actions VALUES (3, 1);
INSERT INTO public.character_actions VALUES (3, 2);
INSERT INTO public.character_actions VALUES (3, 3);
INSERT INTO public.character_actions VALUES (2, 1);
INSERT INTO public.character_actions VALUES (2, 2);
INSERT INTO public.character_actions VALUES (2, 3);
INSERT INTO public.character_actions VALUES (1, 1);
INSERT INTO public.character_actions VALUES (1, 2);
INSERT INTO public.character_actions VALUES (1, 3);


--
-- Data for Name: characters; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.characters VALUES (2, 'Luigi', 'Mushroom Kingdom', 'Green');
INSERT INTO public.characters VALUES (3, 'Peach', 'Mushroom Kingdom', 'Pink');
INSERT INTO public.characters VALUES (7, 'Yoshi', 'Dinosaur Land', 'Green');
INSERT INTO public.characters VALUES (6, 'Daisy', 'Sarasaland', 'Orange');
INSERT INTO public.characters VALUES (1, 'Mario', 'Mushroom Kingdom', 'Red');
INSERT INTO public.characters VALUES (4, 'Toad', 'Mushroom Kingdom', 'Blue');
INSERT INTO public.characters VALUES (5, 'Bowser', 'Koopa Kingdom', 'Yellow');


--
-- Data for Name: more_info; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.more_info VALUES (1, '1981-07-09', 155, 64.5, 1);
INSERT INTO public.more_info VALUES (2, '1983-07-14', 175, 48.8, 2);
INSERT INTO public.more_info VALUES (3, '1985-10-18', 173, 52.2, 3);
INSERT INTO public.more_info VALUES (4, '1950-01-10', 66, 35.6, 4);
INSERT INTO public.more_info VALUES (5, '1990-10-29', 258, 300.0, 5);
INSERT INTO public.more_info VALUES (6, '1989-07-31', NULL, NULL, 6);
INSERT INTO public.more_info VALUES (7, '1990-04-13', 162, 59.1, 7);


--
-- Data for Name: sounds; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.sounds VALUES (1, 'its-a-me.wav', 1);
INSERT INTO public.sounds VALUES (2, 'yippee.wav', 1);
INSERT INTO public.sounds VALUES (3, 'ha-ha.wav', 2);
INSERT INTO public.sounds VALUES (4, 'oh-yeah.wav', 2);
INSERT INTO public.sounds VALUES (5, 'yay.wav', 3);
INSERT INTO public.sounds VALUES (6, 'woo-hoo.wav', 3);
INSERT INTO public.sounds VALUES (7, 'mm-hmm.wav', 3);
INSERT INTO public.sounds VALUES (8, 'yahoo.wav', 1);


--
-- Name: actions_action_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.actions_action_id_seq', 3, true);


--
-- Name: characters_character_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.characters_character_id_seq', 7, true);


--
-- Name: more_info_more_info_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.more_info_more_info_id_seq', 7, true);


--
-- Name: sounds_sound_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.sounds_sound_id_seq', 8, true);


--
-- Name: actions actions_action_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.actions
    ADD CONSTRAINT actions_action_key UNIQUE (action);


--
-- Name: actions actions_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.actions
    ADD CONSTRAINT actions_pkey PRIMARY KEY (action_id);


--
-- Name: character_actions character_actions_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.character_actions
    ADD CONSTRAINT character_actions_pkey PRIMARY KEY (character_id, action_id);


--
-- Name: characters characters_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.characters
    ADD CONSTRAINT characters_pkey PRIMARY KEY (character_id);


--
-- Name: more_info more_info_character_id_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.more_info
    ADD CONSTRAINT more_info_character_id_key UNIQUE (character_id);


--
-- Name: more_info more_info_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.more_info
    ADD CONSTRAINT more_info_pkey PRIMARY KEY (more_info_id);


--
-- Name: sounds sounds_filename_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.sounds
    ADD CONSTRAINT sounds_filename_key UNIQUE (filename);


--
-- Name: sounds sounds_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.sounds
    ADD CONSTRAINT sounds_pkey PRIMARY KEY (sound_id);


--
-- Name: character_actions character_actions_action_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.character_actions
    ADD CONSTRAINT character_actions_action_id_fkey FOREIGN KEY (action_id) REFERENCES public.actions(action_id);


--
-- Name: character_actions character_actions_character_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.character_actions
    ADD CONSTRAINT character_actions_character_id_fkey FOREIGN KEY (character_id) REFERENCES public.characters(character_id);


--
-- Name: more_info more_info_character_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.more_info
    ADD CONSTRAINT more_info_character_id_fkey FOREIGN KEY (character_id) REFERENCES public.characters(character_id);


--
-- Name: sounds sounds_character_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.sounds
    ADD CONSTRAINT sounds_character_id_fkey FOREIGN KEY (character_id) REFERENCES public.characters(character_id);


--
-- PostgreSQL database dump complete
--

