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

DROP DATABASE IF EXISTS second_database;
--
-- Name: second_database; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE second_database WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE second_database OWNER TO freecodecamp;

\connect second_database

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
-- Name: first_table; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.first_table (
);


ALTER TABLE public.first_table OWNER TO freecodecamp;

--
-- Name: second_table; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.second_table (
    id integer,
    username character varying(30)
);


ALTER TABLE public.second_table OWNER TO freecodecamp;

--
-- Data for Name: first_table; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--



--
-- Data for Name: second_table; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--



--
-- PostgreSQL database dump complete
--

