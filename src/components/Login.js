import React from "react";
import logo from "../img/kotakode-logo.svg";

function Login() {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-sm w-full space-y-8">
        <div>
          <img className="mx-auto h-16 w-auto" src={logo} alt="Workflow" />
        </div>
        <form className="mt-6 space-y-3" action="#" method="POST">
          <div id="input" class="flex flex-col w-full my-1">
            <label for="username" class="text-gray-500 mb-1 font-bold text-sm">
              Email/ Username
            </label>
            <input
              type="text"
              id="username"
              class="appearance-none border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:shadow-lg"
              required
            />
          </div>

          <div></div>
          <div id="input" class="flex flex-col w-full my-1">
            <label for="password" class="text-gray-500 mb-1 font-bold text-sm">
              Password
            </label>
            <input
              type="text"
              id="password"
              class="appearance-none border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:shadow-lg"
              required
            />
          </div>

          <div className="text-sm text-right">
            <a
              href="#"
              className="font-normal text-green-500 hover:text-green-700"
            >
              Lupa Password?
            </a>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-md font-bold rounded-md text-white bg-green-600 hover:bg-green-400 focus:outline-none "
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Masuk
            </button>
          </div>
          <p className="text-center text-sm text-gray-600">atau masuk dengan</p>
          <div className="flex w-full gap-7 justify-center">
            <button className="p-4 rounded-md shadow-md shadow-gray-400 w-14 h-14 bg-white">
              <img
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTQ0IiBoZWlnaHQ9IjE0NCIKdmlld0JveD0iMCAwIDQ4IDQ4IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxwYXRoIGZpbGw9IiNmYmMwMmQiIGQ9Ik00My42MTEsMjAuMDgzSDQyVjIwSDI0djhoMTEuMzAzYy0xLjY0OSw0LjY1Ny02LjA4LDgtMTEuMzAzLDhjLTYuNjI3LDAtMTItNS4zNzMtMTItMTIJczUuMzczLTEyLDEyLTEyYzMuMDU5LDAsNS44NDIsMS4xNTQsNy45NjEsMy4wMzlsNS42NTctNS42NTdDMzQuMDQ2LDYuMDUzLDI5LjI2OCw0LDI0LDRDMTIuOTU1LDQsNCwxMi45NTUsNCwyNHM4Ljk1NSwyMCwyMCwyMAlzMjAtOC45NTUsMjAtMjBDNDQsMjIuNjU5LDQzLjg2MiwyMS4zNSw0My42MTEsMjAuMDgzeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNlNTM5MzUiIGQ9Ik02LjMwNiwxNC42OTFsNi41NzEsNC44MTlDMTQuNjU1LDE1LjEwOCwxOC45NjEsMTIsMjQsMTJjMy4wNTksMCw1Ljg0MiwxLjE1NCw3Ljk2MSwzLjAzOQlsNS42NTctNS42NTdDMzQuMDQ2LDYuMDUzLDI5LjI2OCw0LDI0LDRDMTYuMzE4LDQsOS42NTYsOC4zMzcsNi4zMDYsMTQuNjkxeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0Y2FmNTAiIGQ9Ik0yNCw0NGM1LjE2NiwwLDkuODYtMS45NzcsMTMuNDA5LTUuMTkybC02LjE5LTUuMjM4QzI5LjIxMSwzNS4wOTEsMjYuNzE1LDM2LDI0LDM2CWMtNS4yMDIsMC05LjYxOS0zLjMxNy0xMS4yODMtNy45NDZsLTYuNTIyLDUuMDI1QzkuNTA1LDM5LjU1NiwxNi4yMjcsNDQsMjQsNDR6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzE1NjVjMCIgZD0iTTQzLjYxMSwyMC4wODNMNDMuNTk1LDIwTDQyLDIwSDI0djhoMTEuMzAzYy0wLjc5MiwyLjIzNy0yLjIzMSw0LjE2Ni00LjA4Nyw1LjU3MQljMC4wMDEtMC4wMDEsMC4wMDItMC4wMDEsMC4wMDMtMC4wMDJsNi4xOSw1LjIzOEMzNi45NzEsMzkuMjA1LDQ0LDM0LDQ0LDI0QzQ0LDIyLjY1OSw0My44NjIsMjEuMzUsNDMuNjExLDIwLjA4M3oiPjwvcGF0aD48L3N2Zz4="
              />
            </button>
            <button className="p-4 rounded-md shadow-md shadow-gray-400 w-14 h-14 bg-blue-900">
              <img
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTE0MS4wNCwxMy43NmgtMTEwLjA4Yy05LjQ5NDQsMCAtMTcuMiw3LjcwNTYgLTE3LjIsMTcuMnYxMTAuMDhjMCw5LjQ5NDQgNy43MDU2LDE3LjIgMTcuMiwxNy4yaDExMC4wOGM5LjQ5NDQsMCAxNy4yLC03LjcwNTYgMTcuMiwtMTcuMnYtMTEwLjA4YzAsLTkuNDk0NCAtNy43MDU2LC0xNy4yIC0xNy4yLC0xNy4yek0xMjcuMjgsNjUuMzZoLTYuODhjLTcuMzYxNiwwIC0xMC4zMiwxLjcyIC0xMC4zMiw2Ljg4djEwLjMyaDE3LjJsLTMuNDQsMTcuMmgtMTMuNzZ2NTEuNmgtMTcuMnYtNTEuNmgtMTMuNzZ2LTE3LjJoMTMuNzZ2LTEwLjMyYzAsLTEzLjc2IDYuODgsLTI0LjA4IDIwLjY0LC0yNC4wOGM5Ljk3NiwwIDEzLjc2LDMuNDQgMTMuNzYsMy40NHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
              />
            </button>
            <button className="p-4 rounded-md shadow-md shadow-gray-400 w-14 h-14 bg-gray-900">
              <img
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjAiIGhlaWdodD0iNjAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTg2LDE3LjJjLTM3Ljk5NDgsMCAtNjguOCwzMC44MDUyIC02OC44LDY4LjhjMCwzMi4yMzg1MyAyMi4xOTk0Nyw1OS4yMTM4NyA1Mi4xMjc0Nyw2Ni42Nzg2N2MtMC4zMjEwNywtMC45Mjg4IC0wLjUyNzQ3LC0yLjAwNjY3IC0wLjUyNzQ3LC0zLjM0MjUzdi0xMS43NTkwN2MtMi43OTIxMywwIC03LjQ3MDUzLDAgLTguNjQ1ODcsMGMtNC43MDcwNywwIC04Ljg5MjQsLTIuMDIzODcgLTEwLjkyMiwtNS43ODQ5M2MtMi4yNTMyLC00LjE3OTYgLTIuNjQzMDcsLTEwLjU3MjI3IC04LjIyNzMzLC0xNC40ODI0Yy0xLjY1NjkzLC0xLjMwMTQ3IC0wLjM5NTYsLTIuNzg2NCAxLjUxMzYsLTIuNTg1NzNjMy41MjYsMC45OTc2IDYuNDUsMy40MTcwNyA5LjIwMiw3LjAwNjEzYzIuNzQwNTMsMy41OTQ4IDQuMDMwNTMsNC40MDg5MyA5LjE1MDQsNC40MDg5M2MyLjQ4MjUzLDAgNi4xOTc3MywtMC4xNDMzMyA5LjY5NTA3LC0wLjY5MzczYzEuODgwNTMsLTQuNzc1ODcgNS4xMzEzMywtOS4xNzMzMyA5LjEwNDUzLC0xMS4yNDg4Yy0yMi45MTA0LC0yLjM1NjQgLTMzLjg0Mzg3LC0xMy43NTQyNyAtMzMuODQzODcsLTI5LjIyODUzYzAsLTYuNjYyMTMgMi44MzgsLTEzLjEwNjQgNy42NTk3MywtMTguNTM1ODdjLTEuNTgyNCwtNS4zODkzMyAtMy41NzE4NywtMTYuMzgwMTMgMC42MDc3MywtMjAuNTY1NDdjMTAuMzA4NTMsMCAxNi41NDA2Nyw2LjY4NTA3IDE4LjAzNzA3LDguNDkxMDdjNS4xMzcwNywtMS43NjAxMyAxMC43Nzg2NywtMi43NTc3MyAxNi43MDY5MywtMi43NTc3M2M1LjkzOTczLDAgMTEuNjA0MjcsMC45OTc2IDE2Ljc1MjgsMi43NjkyYzEuNDc5MiwtMS43OTQ1MyA3LjcxNzA3LC04LjUwMjUzIDE4LjA0ODUzLC04LjUwMjUzYzQuMTk2OCw0LjE5MTA3IDIuMTg0NCwxNS4yMjc3MyAwLjU4NDgsMjAuNjA1NmM0Ljc5MzA3LDUuNDE4IDcuNjEzODcsMTEuODQ1MDcgNy42MTM4NywxOC40OTU3M2MwLDE1LjQ2MjggLTEwLjkxNjI3LDI2Ljg1NDkzIC0zMy43OTIyNywyOS4yMjI4YzYuMjk1MiwzLjI4NTIgMTAuODg3NiwxMi41MTU4NyAxMC44ODc2LDE5LjQ3MDR2MTUuNjc0OTNjMCwwLjU5NjI3IC0wLjEzMTg3LDEuMDI2MjcgLTAuMjAwNjcsMS41MzY1M2MyNi44MDkwNywtOS4zOTY5MyA0Ni4wNjczMywtMzQuODUyOTMgNDYuMDY3MzMsLTY0Ljg3MjY3YzAsLTM3Ljk5NDggLTMwLjgwNTIsLTY4LjggLTY4LjgsLTY4Ljh6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
              />
            </button>
          </div>
          <p className="text-center text-sm text-gray-600">
            Belum Memiliki Akun? <span className="text-green-500">Daftar</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
