import React, { useState, useEffect } from "react";
import "../css/answer.scss";
import { XMLParser } from "fast-xml-parser";
import { fetchGistRawContent } from "../../../services";
import "../css/examanswers.scss";
import Plus from "../../../img/svg/plusminus.svg";
import Check from "../../../img/svg/check.svg";
import Dot from "../../../img/svg/dot.svg";

export default function Answer() {
  const [studentsList, setStudentsList] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [notFoundError, setNotFoundError] = useState(false);

  useEffect(() => {
    async function fetchStudents() {
      try {
        const grade_11 = await fetchGistRawContent(
          "ddb2b20ab7665a82f7dcc04905da2c10",
          "11_sinif.xml"
        );
        const grade_9 = await fetchGistRawContent(
          "33fd8dae38c014963bb6c9afb21da424",
          "9_sinif.xml"
        );

        const students11 = parseStudents(grade_11);
        const students9 = parseStudents(grade_9);

        const combinedStudentsList = [...students11, ...students9];
        setStudentsList(combinedStudentsList);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    }

    fetchStudents();
  }, []); // Run this effect only once on component mount

  function parseStudents(xmlStudentsList) {
    const parser = new XMLParser();
    const parsedXml = parser.parse(xmlStudentsList);
    const { dataroot } = parsedXml;
    const studentsList = dataroot[Object.keys(dataroot)[0]];

    return studentsList;
  }

  function findStudent() {
    const code = document.getElementById("code").value.trim();
    console.log(code);

    const targetStudent = studentsList.find((s) => s["İş_nömrəsi"] === +code);

    setNotFoundError(!targetStudent);
    setSelectedStudent(targetStudent);
  }

  console.log(selectedStudent);

  return (
    <div className="exam__answer">
      <div className="exam__container">
        <h2>Tələbə kodunu daxil edin</h2>
        <input type="text" id="code" name="code" required />
        <button type="button" onClick={findStudent}>
          Nəticəni göstər
        </button>
        {selectedStudent && (
          <div id="result" className="exam__result">
            <div className="exam__info">
              <div className="exam__info--name">
                <div className="name">
                  <span>Ad:</span>
                  {selectedStudent.Ad &&
                    selectedStudent.Ad.charAt(0).toUpperCase() +
                      selectedStudent.Ad.slice(1).toLowerCase()}
                </div>
                <div className="surname">
                  <span>Soyad:</span>
                  {selectedStudent.Soyad &&
                    selectedStudent.Soyad.charAt(0).toUpperCase() +
                      selectedStudent.Soyad.slice(1).toLowerCase()}
                </div>
              </div>
              <div className="exam__info--about">
                <div>
                  <span>İş nömrəsi:</span>
                  {selectedStudent["İş_nömrəsi"]}
                </div>
                <div>
                  <span>Məktəb:</span>
                  {selectedStudent["Məktəb"]}
                </div>
                <div>
                  <span>Sinif:</span>
                  {selectedStudent["Sinif"]}
                </div>
                <div>
                  <span>Variant:</span>
                  {selectedStudent["Variant"]}
                </div>
                <div>
                  <span>Bölmə:</span>
                  {selectedStudent["Bölmə"]}
                </div>
              </div>
              <div className="exam__info--grade">
                <div className="grade">
                  <h2>Bal:</h2>
                  <h2>{selectedStudent["BAL"]}</h2>
                </div>
                <hr />

                <div className="place">
                  <h3>Sıra:</h3>
                  <h3>{selectedStudent["SIRA"]}</h3>
                </div>
              </div>
            </div>
            <div className="exam__subject--item">
              <div className="exam__subject--item__name">
                <h3>Ana dili</h3>
                <h3>Riyaziyyat</h3>
                <h3>Xarici dil</h3>
              </div>

              <div className="exam__subject">
                <div className="exam__subject--native">
                  <h3>Qapalı tipli testlər</h3>
                  <div className="exam__subject--native__container">
                    <div className="exam__subject--native__close">
                      <h4>Ana dili</h4>
                      <div className="native__close">
                        <img src={Check} alt="" width={20} />
                        {selectedStudent["Ana_dili_Cavabınız"]}
                      </div>
                      <div className="native__close">
                        <img src={Dot} alt="" width={20} />
                        {selectedStudent["Ana_dili_Doğru_cavablar"]}
                      </div>
                      <div className="native__close">
                        <img src={Plus} alt="" width={20} />
                        {selectedStudent["Ana_dili_Status"]}
                      </div>
                    </div>
                    <div className="exam__subject--native__close">
                      <h4>Riyaziyyat</h4>
                      <div className="native__close">
                        <img src={Check} alt="" width={20} />
                        {selectedStudent["Riyaziyyat_Cavabınız"]}
                      </div>
                      <div className="native__close">
                        <img src={Dot} alt="" width={20} />
                        {selectedStudent["Riyaziyyat_Doğru_cavablar"]}
                      </div>
                      <div className="native__close">
                        <img src={Plus} alt="" width={20} />
                        {selectedStudent["Riyaziyyat_Status"]}
                      </div>
                    </div>
                    <div className="exam__subject--native__close">
                      <h4>Xarici dil</h4>
                      <div className="native__close">
                        <img src={Check} alt="" width={20} />
                        {selectedStudent["Xarici_dil_Cavabınız"]}
                      </div>
                      <div className="native__close">
                        <img src={Dot} alt="" width={20} />
                        {selectedStudent["Xarici_dil_Doğru_cavablar"]}
                      </div>
                      <div className="native__close">
                        <img src={Plus} alt="" width={20} />
                        {selectedStudent["Xarici_dil_Status"]}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="exam__subject--matem">
                  <hr />
                  <h3>Açıq tipli testlər</h3>
                  <div className="exam__subject--matem__container">
                    <div className="exam__subject--native__open">
                      <h4></h4>
                    </div>
                    <div className="exam__subject--native__open">
                      <h4>Riyaziyyat</h4>
                      <div className="native__write">
                        {selectedStudent["Riyaziyyat_Açıq_test_Cavabınız"]}
                      </div>
                      <div className="native__write">
                        {selectedStudent["Riyaziyyat_Açıq_test_Doğru_cavablar"]}
                      </div>
                      <div className="native__write">
                        {selectedStudent["Riyaziyyat_Açıq_test_Status"]}
                      </div>
                    </div>
                    <div className="exam__subject--native__write">
                      <h4></h4>
                      <div className="native__write"></div>
                    </div>
                  </div>
                </div>
                <div className="exam__subject--foreign">
                  <hr />
                  <h3>Yazı işi üzrə ballar</h3>
                  <div className="exam__subject--foreign__container">
                    <div className="exam__subject--native__write">
                      <h4>Ana dili</h4>
                      <div className="native__write">
                        {selectedStudent["Ana_dili_Yazı_işi_balları"]}
                      </div>
                    </div>
                    <div className="exam__subject--foreign__open">
                      <h4>Riyaziyyat</h4>
                      <div className="foreign__write">
                        {selectedStudent["Riyaziyyat_Yazı_işi_balları"]}
                      </div>
                    </div>
                    <div className="exam__subject--foreign__write">
                      <h4>Xarici dil</h4>
                      <div className="foreign__write">
                        {selectedStudent["Xarici_dil_Yazı_işi_balları"]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p>Qeyd: Yazı işi üzrə ballar 6-ya bölünərək hesablanmışdır</p>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Ana dili</th>
                  <th>Riyaziyyat</th>
                  <th>Xarici dil</th>
                  <th>CƏMİ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Sual sayı</th>
                  <td>{selectedStudent["Ana_dili_Sual_sayı"]}</td>
                  <td>{selectedStudent["Riyaziyyat_Sual_sayı"]}</td>
                  <td>{selectedStudent["Xarici_dil_Sual_sayı"]}</td>
                  <td>{selectedStudent["CƏMİ_SUAL_SAYI"]}</td>
                </tr>
                <tr>
                  <th>DOĞRU</th>
                  <td>{selectedStudent["Ana_dili_Doğru_sayı"]}</td>
                  <td>{selectedStudent["Riyaziyyat_Doğru_sayı"]}</td>
                  <td>{selectedStudent["Xarici_dil_Doğru_sayı"]}</td>
                  <td>{selectedStudent["CƏMİ_DOĞRU"]}</td>
                </tr>
                <tr>
                  <th>SƏHV</th>
                  <td>{selectedStudent["Ana_dili_Səhv_sayı"]}</td>
                  <td>{selectedStudent["Riyaziyyat_Səhv_sayı"]}</td>
                  <td>{selectedStudent["Xarici_dil_Səhv_sayı"]}</td>
                  <td>{selectedStudent["CƏMİ_SƏHV"]}</td>
                </tr>
                <tr>
                  <th>BAL</th>
                  <td>{selectedStudent["Ana_dili_Nisbi_bal"]}</td>
                  <td>{selectedStudent["Riyaziyyat_Nisbi_bal"]}</td>
                  <td>{selectedStudent["Xarici_dil_Nisbi_bal"]}</td>
                  <td>{selectedStudent["BAL"]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {notFoundError && (
          <div className="error">Bu kodu olan tələbə tapılmadı.</div>
        )}
      </div>
    </div>
  );
}
