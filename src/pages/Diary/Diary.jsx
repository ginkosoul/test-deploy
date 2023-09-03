import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/Container/Container";
import { TitlePage } from "../../components/TitlePage/TitlePage";
import DayDashboard from "../../components/diary/DayDashboard/DayDashboard";
import DayExercises from "../../components/diary/DayExercises/DayExercises";
import DayProducts from "../../components/diary/DayProducts/DayProducts";
import DaySwitch from "../../components/diary/DaySwitch/DaySwitch";
import css from "./Diary.module.css";
import { useEffect, useState } from "react";
import { getDiariesByDateThunk } from "../../redux/diary/operations";
import { getInputValueFromDate } from "../../components/DatePickerCalendar/utils";
import { selectDiary } from "../../redux/diary/selectors";
import { selectorBodyData } from "../../redux/auth/selectors";

const Diary = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(() => new Date());
  const dateFormat = getInputValueFromDate(date, 1);

  useEffect(() => {
    dispatch(getDiariesByDateThunk(dateFormat));
  }, [dateFormat, dispatch]);

  const diary = useSelector(selectDiary);
  const bodyData = useSelector(selectorBodyData);

  const { consumedProducts } = diary;
  const { doneExercises } = diary;

  return (
    <section className={css.diary_page}>
      <Container>
        <div className={css.header}>
          <TitlePage text="Diary" />
          <DaySwitch date={date} setDate={setDate} />
        </div>

        <div className={css.content}>
          <div className={css.tables}>
            {consumedProducts && (
              <DayProducts consumedProducts={consumedProducts} />
            )}
            <DayExercises doneExercises={doneExercises} />
          </div>
          <DayDashboard diary={diary} bodyData={bodyData} />
        </div>
      </Container>
    </section>
  );
};

export default Diary;
